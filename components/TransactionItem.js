import {currencyFormatter} from '@/lib/utils'



const TransactionItem = ({color, name, amount}) => {
  return (
    
    <button className='flex items-center justify-between bg-slate-700 py-4 px-4 rounded-2xl'>
          <div className='flex items-center gap-2'>
            <div  className='w-[1.5rem] h-[1.5rem] rounded-full ' style={{backgroundColor : color}} />
            <div className='capitalize'>{name}</div>
          </div>

          <div className='text-red-400 font-extralight'>- {currencyFormatter(amount)}</div>
    </button>
  )
}

export default TransactionItem;