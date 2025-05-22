
export default function BaseContainer(props: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`md:w-[70vw] lg:w-[733px] ${props.className}`}>
      {props.children}
    </div>
  )
}
