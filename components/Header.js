export default function Header({ title, linkto }) {
  return <h1 className="title">Here be <s>dragons</s> {title} <a href={linkto}>Nikita Nekrasov.</a></h1>
}
