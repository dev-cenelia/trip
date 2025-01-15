import Title from "../component/title/Title";


export default function Main() {
  return (
    <div style={{width:"1280px", height:"auto", margin:"0 auto", padding:"30px 0px", boxSizing:"border-box"}}>
        <Title defaultTitle={"こんにちは、札幌。"} updatedTitle={"Hello, Sapporo."}/>
    </div>
  )
}
