import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-black flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/image/kafka.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl p-8 bg-white bg-opacity-90 rounded-2xl shadow-2xl">
        {/* Left Column */}
        <div className="space-y-10">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/image/kanun.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg border-4 border-gray-800"
              />
            </div>
            <h1 className="text-4xl font-extrabold mt-4 text-gray-800">
              Kittayod Tidyong
            </h1>
          </div>

          {/* Education Section */}
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ประวัติการศึกษา</h2>
            <p className="text-xl font-semibold">มหาวิทยาลัยพะเยา</p>
            <p className="mt-2">คณะเทคโนโลยีสารสนเทศและการสื่อสาร</p>
            <p className="mt-1">สาขาวิศวกรรมซอฟต์แวร์</p>
            <p className="mt-4 text-gray-400">เข้าศึกษาเมื่อปี 2023-ปัจจุบัน</p>
          </div>

          {/* Skills Section */}
          <div className="p-8 bg-gray-700 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ทักษะด้านการเขียนโปรแกรม</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Programming Language: JavaScript, Python</li>
              <li>Web Development: HTML, CSS</li>
              <li>Tool: Figma</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start space-y-10">
          {/* About Me Section */}
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ข้อมูลเกี่ยวกับฉัน</h2>
            <p>
              สวัสดี ผมชื่อ นายกฤตยชญ์ ติดยงค์ กําลังศึกษาอยู่ชั้นปีที่ 2 มหาวิทยาลัยพะเยา
              ผมเป็นคนเงียบๆ ชอบนอนเป็นกิจวัตรประจําวัน งานอดิเรกของผมคือ เป็นคนที่ชอลเล่นเกมมาก
              อาชีพที่ผมใฝ่ฝันที่อยากเป็น คือ การเลือกที่จะทำอาชีพ tseter ไม่ก็ font-end
              เพราะว่าผมมีความสนใจในสองสิ่งนี้
            </p>
          </div>

          {/* Projects Section */}
          <div className="p-8 bg-gray-700 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ผลงานประสบการณ์</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>อบรม "หัวข้อการใช้ framework ในการพัฒนาซอฟต์แวร์ส่วนหน้า"</li>
              <li>ทําโปรเจ็คเกี่ยวกับ "เว็บแนะนำเครื่องดื่ม"</li>
              <li>ทําโปรเจ็คเกี่ยวกับ "เว็บไซต์ซื้อ ขาย art-toy"</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ข้อมูลติดต่อ</h2>
            <p className="text-gray-300">Facebook: Kittayod Tidyong</p>
            <p className="text-gray-300">Instagram: Kittayod Tidyong</p>
            <p className="text-gray-300">Email: 66022376@up.ac.th</p>
            <p className="text-gray-300">Phone: 065-872-8203</p>
          </div>
        </div>
      </div>
    </div>
  );
}