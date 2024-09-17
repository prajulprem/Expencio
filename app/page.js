"use client";
import { currencyFormatter } from '@/lib/utils'
import TransactionItem from '@/components/TransactionItem'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState, useRef, useEffect } from 'react';
import Popup from '@/components/Popup';


//Firebase Import 
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

ChartJS.register(ArcElement, Tooltip, Legend);

const DummyElement = [{
    id:1,
    title: 'movie',
    amount: 1200,
    color: '#158ff5'
    },
    
    {
    id:2,
    title: 'transport',
    amount: 1200,
    color: '#e2ff00'
    },

    {
    id:3,
    title: 'misc',
    amount: 1000,
    color: '#ff8a22'
    },

    {
    id:4,
    title: 'food',
    amount: 6500,
    color: '#1aa654'
    },

    {
    id:5,
    title: 'rent',
    amount: 4900,
    color: '#ff0022'
    },
]


export default function Home() {

  const [incomePopUpOpen, setIncomePopUpOpen] = useState(false);
  var k = 0;
  const [income, setIncome] = useState([]);
  console.log(income);

  const amountRef = useRef();
  const descriptionRef = useRef();

  const incomeHandler = async (e) => {
    e.preventDefault();
    const newIncome = {
      amount : amountRef.current.value,
      description: descriptionRef.current.value,
      createdAt: new Date()
    };

    const collectionRef = collection(db, 'Income');

    try {
      const docnew = await addDoc(collectionRef, newIncome)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect( () =>{

        const getIncomeData = async() =>
        {
          const collectionRef = collection(db, 'Income');
          const docSnap = await getDocs(collectionRef);
          const incomeData = docSnap.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data(),
              createDate: new Date(doc.data().createdAt.toMillis()),
          }
          });
        setIncome(incomeData);
        
        }
          getIncomeData();
      },[]);

  return (
    <>
    {/* overlay for popup */}

     <Popup 
     open={incomePopUpOpen}
     onClose = {
      setIncomePopUpOpen
     }
     >

      <form onSubmit={incomeHandler} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='amount'>Input amount</label>
          <input id="amount" 
          name='amount' 
          ref={amountRef} 
          type='number' 
          min={0.01} 
          step={0.01} 
          placeholder='Enter the amount' 
          className='px-4 py-2 bg-slate-700 rounded-2xl' 
          required
          /> 
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='description'>Input description</label>
          <input id="description" 
          name='description' 
          ref={descriptionRef}
          type='text' 
          placeholder='Enter the description' 
          className='px-4 py-2 bg-slate-700 rounded-2xl' 
          required
          /> 
        </div>
        <button type='submit' className='self-start btn btn-primary mt-2'>Add Income</button>
      </form>
      <div className='flex flex-col gap-2 mt-6'>
        <h3 className='font-semibold text-lg'>Income History</h3>
          {
           income.map((i,index) => {
            return (
              <div key={index} className='flex items-center justify-between'>
                <div>
                <p> <span className='text-sm  font-semibold'>{index + 1}. </span><span className='font-semibold' >{i.description}</span> {/* FIX THIS SHIT FIRST */} </p>
                <small className='text-xs'>{i.createDate.toISOString()}</small>
                </div>
                <p className='flex items-center gap-2'>{currencyFormatter(i.amount)}</p>
              </div>
            )
          })
          }
      </div>

     </Popup>


    
    <main>
      <section className="py-4">
        <small className='text-gray-400 text-xs'>My Balance</small>
        <div className="text-2xl font-bold">{currencyFormatter(10000000)}</div>
      </section>

      <section className="flex items-center gap-2">
        <button  className="btn-primary">+ Expense</button>
        <button onClick={() => setIncomePopUpOpen(true)} className="btn-primary-outline">+ Income</button>
      </section>

      <section className="py-6">
        <h3 className='text-xl'>Transactions</h3>
        <div className='flex flex-col gap-4 mt-6'>
          
            {
              DummyElement.map(expense =>{
                return <TransactionItem 
                  key={expense.id}
                  color={expense.color}
                  name = {expense.title}
                  amount={expense.amount}
                />
              })

              
            }
        </div>
      </section>

      {/* Chart Section */}

      <section>
        <h3 className='text-xl'>Statistics</h3>

        <div className='max-w-sm  mx-auto'>
          <Doughnut 
            data={{
              labels: DummyElement.map(expense => expense.title), 
              datasets: [
                      {
                        label: 'Expenses',
                        data: DummyElement.map(expense => expense.amount),
                        backgroundColor: DummyElement.map(expense => expense.color),
                        borderColor: ['#0F172A'],
                        borderWidth: 5
                      }
              ],
            }}
          />
        </div>
      </section>

    </main>
    </>
  );
}
