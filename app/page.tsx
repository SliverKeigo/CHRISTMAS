export default function Page() {
  return (

    <div className="bg-gray-200 w-1/3  p-4">

      <div className="text-black">
        <div className="flex justify-between text-black">
          <p className="text-xl">COMMEMORATE WHEN:</p>
          <p className="text-xl">DEC-2023</p>
          <p className="text-xl">BY: Keigo</p>
          <p className="text-xl">CHRISTMAS</p>
        </div>
        <p className="text-xs mt-8">Keigo misses that Christmas Eve in 2018</p>
        <div className="font-bold mt-1">
          <div className="circle-text">打工人</div>
          <p className="inline-block">圣诞树</p>
        </div>
      </div>
      <div className="space-y-4 mt-32">
        <div className="flex justify-center">
          <div className="bg-[#95ec69] rounded-full w-1/6 px-8 py-2">
            <p className={" text-lg text-left text-black font-bold font-heiti"}> • • • </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#95ec69] rounded-full w-2/6 px-8 py-3">
            <p className="text-lg text-left text-black font-bold font-heiti">改好了吗</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#95ec69] rounded-full w-3/6 px-8 py-4">
            <p className="text-lg text-black text-left font-bold font-heiti">? ? ? ? ? ?</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#95ec69] rounded-full w-4/6  px-8 py-5">
            <p className="text-lg  text-black text-left font-bold font-heiti">🔇59"</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center text-black text-xs mt-8">
        <div className="bg-[#bcbcbc] rounded-full w-1/12">
          <p className="text-sm text-center text-black  font-heiti">1分钟前</p>
        </div>
      </div>
      <div className="text-left text-xs mt-32 text-black">
        <p>COPYRIGHT © 2023 Keigo. All rights reserved.</p>
      </div>
    </div>
  )
}
