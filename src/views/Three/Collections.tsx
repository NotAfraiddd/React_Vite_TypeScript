export const Collections = () => {
  const TAGS = ['Profile', 'New York', 'Relax', 'Student', 'Person'];
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 font-[#0E0E38] shadow-lg">
      <h1 className="text-3xl font-bold">Popular collections</h1>
      <div className="mt-6">
        {
          TAGS.map((tag, index) => {
            <a key={index} className="rounded-sm bg-white p-4"> {tag}</a>
          })
        }
      </div>
    </div>
  )
}