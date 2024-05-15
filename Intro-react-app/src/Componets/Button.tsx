interface ButtonProps {
    children:string 
    onClickFuntion:() => void
     color:string

}

 


const Button = ({children,onClickFuntion,color}:ButtonProps) => {
  return (
    <>
   <button className={`btn btn-${color}`} onClick={onClickFuntion}>{children}</button>
    </>
  )
}

export default Button