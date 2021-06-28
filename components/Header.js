export default function Header({ title, linkto }) {
  return <h1 className="title">{title} <a href={linkto}>Nikita Nekrasov.</a></h1>
}
