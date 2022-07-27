function Tag({ children }: any) {
  return (
    <p className="text-orange-500 font-bold font-kumbh text-base bg-orange-300 my-1 px-2 rounded-md flex items-center justify-center">
      {`${children}%`}
    </p>
  )
}
export default Tag