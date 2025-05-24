
export default function BaseContainer(props: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`md:w-[70vw] lg:w-[733px] px-4 ${props.className}`}>
      {props.children}
    </div>
  )
}
