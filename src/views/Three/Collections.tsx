import { Image } from "./Image";

export const Collections = () => {
  const TAGS = ['Profile', 'New York', 'Relax', 'Student', 'Person'];
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 font-[#0E0E38] shadow-lg">
      <h1 className="text-3xl font-bold">Popular collections</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {
          TAGS.map((tag, index) => (
            <a key={index} className="rounded-lg cursor-pointer hover:opacity-70 bg-white p-4"> {tag}</a>
          ))
        }
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-3xl bg-white p-6">
          <div>
            <Image icon="https://placewaifu.com/image/100" extendClass="w-full aspect-video rounded-2xl" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <Image icon="https://placewaifu.com/image/140" extendClass="w-full aspect-video rounded-2xl" />
            <Image icon="https://placewaifu.com/image/110" extendClass="w-full aspect-video rounded-2xl" />
            <Image icon="https://placewaifu.com/image/150" extendClass="w-full aspect-video rounded-2xl" />
          </div>
          <div className="flex justify-between pt-6 items-center">
            <span className="text-2xl font-medium">People</span>
            <div>
              <img src="" alt="" />
              <span>114</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <div>
            <Image icon="https://placewaifu.com/image/100" extendClass="w-full aspect-video rounded-2xl" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <Image icon="https://placewaifu.com/image/140" extendClass="w-full aspect-video rounded-2xl" />
            <Image icon="https://placewaifu.com/image/110" extendClass="w-full aspect-video rounded-2xl" />
            <Image icon="https://placewaifu.com/image/150" extendClass="w-full aspect-video rounded-2xl" />
          </div>
          <div className="flex justify-between pt-6 items-center">
            <span className="text-2xl font-medium">People</span>
            <div>
              <img src="" alt="" />
              <span>114</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <div>
            <Image icon="https://placewaifu.com/image/100" extendClass="w-full aspect-video rounded-2xl" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <Image icon="https://placewaifu.com/image/140" extendClass="w-full aspect-video rounded-2xl" />
            <Image icon="https://placewaifu.com/image/110" extendClass="w-full aspect-video rounded-2xl" />
            <Image icon="https://placewaifu.com/image/150" extendClass="w-full aspect-video rounded-2xl" />
          </div>
          <div className="flex justify-between pt-6 items-center">
            <span className="text-2xl font-medium">People</span>
            <div>
              <img src="" alt="" />
              <span>114</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
