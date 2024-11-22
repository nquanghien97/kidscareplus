import CartIcon from '@/assets/icons/CartIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import Certificate from '@/components/HomePage/Certificate'
import Experience from '@/components/HomePage/Experience'
import Feedback from '@/components/HomePage/Feedback'
import FormOrder from '@/components/HomePage/FormOrder'
import React from 'react'
import Image from 'next/image'
import Banner from '@/components/HomePage/Banner'
import Link from 'next/link'
import { Metadata } from 'next'
import DownIcon from '@/assets/icons/DownIcon'

export const metadata: Metadata = {
  metadataBase: new URL('https://kidscareplus.vn'),
  title: 'Kidscareplus',
  description: 'KIDS CARE PLUS vừa bổ sung Canxi, Phospho, D3, K2 làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần CBP kích thích nguyên bào xương phát triển, nhờ ...',
  keywords: 'Oz Farm Kid\'s Care Plus',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    locale: 'vi_VN',
    title: 'Kids Care Plus',
    url: 'https://kidscareplus.vn/',
    siteName: 'KidsCarePlus',
    type: 'website'
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico'
      }
    ]
  }
}

function page() {
  return (
    <main>
      <div className="fixed bottom-4 right-4 z-[100]">
        <Link href="tel:0978488123" className="w-16 h-16 rounded-full bg-[#0054a5] flex justify-center items-center mb-4">
          <PhoneIcon width={40} height={40} fill='white' />
        </Link>
        <Link href="#order" className="w-16 h-16 rounded-full bg-[#0054a5] flex justify-center items-center">
          <CartIcon width={40} height={40} fill='white' />
        </Link>
      </div>
      <Banner />
      <section className="mb-8 mt-4">
        <div className="max-w-6xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-[40px] uppercase text-center">
            <div>
              <p className="bg-[#065691] bg-clip-text text-transparent font-bold md:pt-4 pt-1">Giải pháp tăng trưởng chiều cao</p>
            </div>
            <div>
              <p className="md:pt-6 pt-1">
                <span className="bg-[#065691] bg-clip-text text-transparent">Toàn diện từ </span>
                <span className="py-2 px-4 bg-[#065691] rounded-md text-white">Australia</span>
              </p>
            </div>
          </div>
          <div className="relative text-xs max-md:hidden">
            <Image src="/bg-hop-sua.webp" alt="hop-sua" width={1200} height={900} />
            <p className="text-[#065691] w-[190px] absolute xl:top-[140px] xl:left-[54px] md:top-[100px] md:left-12 top-[96px] left-11"><strong>OZ FARM</strong> là thương hiệu bản địa Úc với chất lượng sữa thuần khiết 100% từ bò chăn thả & ăn cỏ tự nhiên, vượt qua nhiều tiêu chuẩn khắt khe và đạt nhiều chứng nhận danh giá trên thế giới.</p>
            <p className="text-[#065691] w-[190px] absolute xl:top-[112px] xl:right-[100px] sm:top-[30px] sm:right-[20px] lg:top-[72px] lg:right-[60px]"><strong>CBP 400mg & Canxi 800mg </strong>
              Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với Canxi hữu cơ và CBP tăng cường hoạt động của nguyên bào xương giúp hấp thu Canxi dễ dàng</p>
            <p className="text-[#065691] lg:w-[204px] w-[160px] absolute xl:top-[360px] xl:right-6 md:top-[254px] md:right-[12px] top-[200px] right-[12px]"><strong>Axit Tổ yến + PS + DHA & ARA </strong>
              Phát triển trí não & hệ thần kinh, tăng cường khả năng ghi nhớ & học hỏi</p>
            <p className="text-[#065691] w-[190px] absolute xl:bottom-[220px] xl:left-20 bottom-[180px] left-[80px]"><strong>Lutein </strong>
              Hỗ trợ phát triển thị lực, sáng mắt & bảo vệ mắt.</p>
            <p className="text-[#065691] w-[190px] absolute xl:bottom-[230px] xl:right-20 bottom-[200px] right-0"><strong>Lactoferrin </strong> Là “lá chắn miễn dịch đầu tiên” của trẻ, giúp kháng khuẩn, kháng Virus và điều hòa miễn dịch</p>
          </div>
          <div className="md:hidden text-xs">
            <div className="flex flex-col justify-center items-center mt-2 ">
              <Image src="/bg-hop-sua-1.webp" alt="bg-hop-sua" width={215} height={290} />
              <div className="flex flex-col px-2">
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Nhập khẩu nguyên lon từ Australia</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>OZ FARM </strong>
                      là thương hiệu bản địa Úc với chất lượng sữa thuần khiết 100% từ bò chăn thả & ăn cỏ tự nhiên,
                      vượt qua nhiều tiêu chuẩn khắt khe và đạt nhiều chứng nhận danh giá trên thế giới.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Sáng mắt</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>Lutein</strong>
                      <br />
                      Hỗ trợ phát triển thị lực, sáng mắt & bảo vệ mắt.
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Cao cả về chất và lượng</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>CBP 400mg & Canxi 800mg</strong>
                      <br />
                      Phát triển khung xương chắc khỏe & tăng chiều cao vượt trội với Canxi hữu cơ và CBP tăng cường hoạt động của nguyên bào xương giúp hấp thu Canxi dễ dàng
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Phát triển trí não</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>Axit Tổ yến + PS + DHA & ARA</strong>
                      <br />
                      Phát triển trí não & hệ thần kinh, tăng cường khả năng ghi nhớ & học hỏi
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 relative flex justify-center items-center">
                    <Image src="/h11.webp" alt="h11" width={120} height={120} />
                    <span className="text-[#065691] text-center text-shadow font-bold absolute max-w-[100px]">Tăng cường miễn dịch</span>
                  </div>
                  <div className="w-2/3 flex items-center">
                    <span className="text-[#065691] font-semibold">
                      <strong>Lactoferrin</strong>
                      <br />
                      Là “lá chắn miễn dịch đầu tiên” của trẻ, giúp kháng khuẩn, kháng Virus và điều hòa miễn dịch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link href="#order" className="bg-[#0054a5] px-8 py-2 rounded-xl text-white text-2xl hover:opacity-70 flex justify-center items-center transform animate-pulsate">
            Đặt hàng ngay
            <DownIcon width={40} height={40} fill='white' />
          </Link>
        </div>
      </section>
      <section className="mb-20">
        <div className="max-w-4xl m-auto">
          <div className="flex flex-col items-center justify-center text-2xl md:text-3xl uppercase mb-8 text-center">
            <div>
              <p className="bg-[#065691] bg-clip-text text-transparent pt-2">Tăng chiều cao từ cấp độ nguyên bào xương*</p>
            </div>
            <div>
              <p className="bg-[#065691] bg-clip-text font-bold text-transparent pt-2">Cao hơn cả về chất lượng</p>
            </div>
          </div>
          <div className="mt-4 mb-14 px-4">
            <div className="border-[1px] border-[#79d8dc] rounded-full px-8">
              <span className="relative top-[-15px] bg-[#e9fafb] text-xs md:text-base rounded-full text-[#065691] inline-block px-3 py-2 text-center">(*) Nguyên bào xương xây dựng cấu trúc ma trận xương, dẫn các hạt Canxi và khoáng chất vào xương, từ đó tác động trực tiếp tới chất lượng xương và chiều cao tối đa của cơ thể.</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex max-md:flex-col gap-10 px-4">
              <div className="md:w-1/2 bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/cbp.webp" alt="bg-sua" width={160} height={175} />
                <span className="text-[#135689]">
                  <strong>CBP </strong>
                  trong KID&apos;S CARE PLUS có kích thước phân tử siêu nhỏ, <strong>30 Kilodalton (≈ 1/50 tỷ hạt Nano),</strong> dễ dàng len lỏi và kích thích Nguyên bào xương hoạt động hiệu quả hơn*
                </span>
              </div>
              <div className="md:w-1/2 bg-[url('/bg1f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl">
                <Image src="/10l.webp" alt="bg-sua" width={320} height={175} />
                <span className="text-[#135689]">
                  <strong>CBP</strong> là thành phần quý hiếm bậc nhất ngành sữa. <strong>10 lít sữa non</strong> từ Bò ăn cỏ tự nhiên chỉ chiết xuất được <strong>4 gam CBP</strong>.
                </span>
              </div>
            </div>
            <div className="px-4 mt-10 md:mt-16">
              <div className="bg-[url('/bg2f.png')] bg-cover bg-center rounded-2xl px-8 py-5 shadow-2xl relative">
                <Image src="/oz2.webp" alt="bg-sua" width={215} height={290} className="mx-auto md:hidden" />
                <span className="w-full md:w-3/5 inline-block text-[#135689]">
                  <strong>CBP</strong> thúc đẩy <strong>nguyên bào xương</strong> sản sinh và hoạt động hiệu quả, hình thành ma trận xương, kích thích xương dài ra nhanh hơn. Ngoài ra, <strong>CBP</strong> còn giúp tăng mật độ xương, hấp thu <strong>Canxi</strong> cùng các dưỡng chất quan trọng như Sắt, Kẽm... tốt hơn, từ đó <strong>tăng chiều cao cả về lượng & chất.</strong>
                </span>
                <Image src="/oz2.webp" alt="bg-sua" width={276} height={276} className="mx-auto max-md:hidden absolute top-[-40px] right-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8 md:mb-20">
        <div className="max-w-6xl m-auto px-4">
          <div>
            <p className="text-[#135689] text-center text-xl md:text-3xl uppercase">Chuyên gia new zealand <br /><strong>chia sẻ nguyên lý tăng chiều cao</strong><br /> từ cấp độ nguyên bào</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 w-full">
              <iframe className="rounded-2xl w-full h-[315px]" src="https://www.youtube.com/embed/6IrJ8Q4Fg6k?si=kqutl4M6KCgvW9DV" />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-[#135689] text-justify">Xương dài ra do quá trình <strong>cốt hóa</strong> sụn tăng trưởng thành xương. Hầu hết quá trình này do <strong>nguyên bào xương</strong> chịu trách nhiệm. Nguyên bào xương tạo ra ma tr ận xương (Khung nền xương) đồng thời tăng cường chuyển hóa, lắng đọng Canxi, Phospho để lấp đầy và làm cứng ma trận xương, giúp xương dài ra ở 2 đầu. <strong>KID&apos;S CARE PLUS</strong> vừa bổ sung <strong>Canxi, Phospho, D3, K2</strong> làm nguyên liệu cho quá trình tạo xương, vừa chứa thành phần <strong>CBP</strong> kích thích nguyên bào xương phát triển, nhờ đó thúc đẩy mạnh mẽ quá trình cốt hóa ở 2 đầu xương, giúp <strong>tăng chiều cao cả về lượng và về chất.</strong></p>
              <Image src="/asset_11.png" alt='asset_11' width={400} height={1} className="mx-auto my-4" />
              <p className="text-[#135689] mb-4"><strong>Chuyên gia tăng chiều cao David - viện dinh dưỡng New Zealand.</strong></p>
              <Link href="#" className="text-[#135689] underline">Tìm hiểu ngay</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="max-md:mb-8 bg-[url('/dong-co-d-1.webp')] bg-[length:100%_100%] bg-center h-[1062px] relative max-md:hidden">
        <div className="max-w-6xl m-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl md:text-5xl text-[#135689] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-around">
              <div className="w-2/5">
                <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
                  <p className="text-lg text-center text-white">Nguồn sữa Úc tự nhiên giàu giá trị dinh dưỡng</p>
                </div>
                <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
                  <p>Phương thức chăn nuôi bò tự nhiên cùng thức ăn là đồng cỏ tươi và sạch giúp nguồn sữa Úc chứa hàm lượng dinh dưỡng cao, cụ thể: hàm lượng omega-3 cao hơn 147% so với sữa thông thường, hàm lượng acid béo linoleic liên hợp (dưỡng chất có khả năng chống viêm) nhiều gấp đôi,…
                    <br />
                    <br />
                    Úc là vùng đất của những đàn bò sữa được chăn nuôi tự nhiên: Bò tại các trang trại Úc được thả tự do, uống nước sạch và ăn cỏ tươi. Các trang trại này tách biệt với khu đô thị, do vậy hoàn toàn trong lành. Mỗi ngày, đàn bò Úc còn được massage và cho nghe nhạc để thả lỏng. Đặc biệt, bò còn được gắn chip để theo dõi sức khỏe nhằm đảm bảo cho ra dòng sữa chất lượng bậc nhất. Mỗi con bò đều được cấp mã số và quản lý theo Chương trình Định danh Vật nuôi Quốc gia</p>
                </div>
              </div>
              <div className="w-1/3">
                <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
                  <p className="text-lg text-center text-white">Công nghệ sản xuất tiên tiến bậc nhất từ Úc</p>
                </div>
                <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
                  <p>Sữa từ khi được vắt tại trang trại cho đến khi ra thành phẩm chỉ mất 24 giờ. Các thành phần dinh dưỡng sau khi trộn với sữa tươi sẽ được đưa vào sấy lạnh 1 lần duy nhất, đảm bảo dưỡng chất được giữ trọn vẹn và phân bố đều trong từng muỗng sữa.</p>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={360} height={360} />
              </div>
            </div>
            <div className="flex justify-center text-center flex-col mt-[160px] text-2xl text-[#f0c561]">
              <p>BIẾN MÓN QUÀ KỲ DIỆU CỦA THIÊN NHIÊN TRỞ THÀNH SẢN PHẨM HỮU CƠ</p>
              <p>TUYỆT VỜI CHO THẾ HỆ TƯƠNG LAI CAO LỚN VÀ TỐT ĐẸP HƠN</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 mb-8 md:mb-20 bg-[url('/bgr-co-m.webp')] bg-center bg-[length:100%_100%] h-[820px] relative md:hidden">
        <div className="mb-8">
          <h2 className="text-xl md:text-5xl text-[#135689] uppercase text-center !leading-tight">Nguồn sữa từ những chú bò <br /><span><strong>hạnh phúc nhất thế giới</strong></span></h2>
        </div>
        <div className="flex justify-center w-full flex-col">
          <div className="mb-12 mx-12">
            <div className="flex justify-between w-full mb-4">
              <Image src="/conbo_img_1.png" alt="conbo_img_1" width={75} height={45} />
              <Image src="/conbo_img_2.png" alt="conbo_img_2" width={75} height={45} />
              <Image src="/conbo_img_3.png" alt="conbo_img_3" width={75} height={45} />
            </div>
            <div>
              <p className="text-center text-xl font-semibold text-[#715421]">Nông trại bò sữa chuẩn Quốc tế</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/non-gmo.png" alt="non-gmo.png" width={320} height={120} />
          </div>
        </div>
      </section>
      <section className="md:hidden">
        <div className="flex flex-col px-4">
          <div className="w-full">
            <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
              <p className="text-lg text-center text-white">Nguồn sữa Úc tự nhiên giàu giá trị dinh dưỡng</p>
            </div>
            <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
              <p>Phương thức chăn nuôi bò tự nhiên cùng thức ăn là đồng cỏ tươi và sạch giúp nguồn sữa Úc chứa hàm lượng dinh dưỡng cao, cụ thể: hàm lượng omega-3 cao hơn 147% so với sữa thông thường, hàm lượng acid béo linoleic liên hợp (dưỡng chất có khả năng chống viêm) nhiều gấp đôi,…
                <br />
                <br />
                Úc là vùng đất của những đàn bò sữa được chăn nuôi tự nhiên: Bò tại các trang trại Úc được thả tự do, uống nước sạch và ăn cỏ tươi. Các trang trại này tách biệt với khu đô thị, do vậy hoàn toàn trong lành. Mỗi ngày, đàn bò Úc còn được massage và cho nghe nhạc để thả lỏng. Đặc biệt, bò còn được gắn chip để theo dõi sức khỏe nhằm đảm bảo cho ra dòng sữa chất lượng bậc nhất. Mỗi con bò đều được cấp mã số và quản lý theo Chương trình Định danh Vật nuôi Quốc gia</p>
            </div>
          </div>
          <div className="w-full">
            <div className="px-12 py-2 rounded-2xl bg-liner relative z-[2]">
              <p className="text-lg text-center text-white">Công nghệ sản xuất tiên tiến bậc nhất từ Úc</p>
            </div>
            <div className="bg-[#e8f2e9] text-[#204D97] border-[1px] border-white text-justify relative bottom-5 z-[1] py-8 px-4 rounded-2xl">
              <p>Sữa từ khi được vắt tại trang trại cho đến khi ra thành phẩm chỉ mất 24 giờ. Các thành phần dinh dưỡng sau khi trộn với sữa tươi sẽ được đưa vào sấy lạnh 1 lần duy nhất, đảm bảo dưỡng chất được giữ trọn vẹn và phân bố đều trong từng muỗng sữa.</p>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 max-md:hidden">
            <Image src="/dong-co-d-2.webp" alt="dong-co-d-2" width={360} height={360} />
          </div>
        </div>
      </section>
      <section className="mb-8 bg-[url('/nha-may-2.webp')] h-[450px] md:h-[1050px] bg-[length:100%_100%] pt-16">
        <div className="px-4">
          <div className="bg-[url('/asset_10.png')] bg-[length:100%_100%] text-center py-4">
            <h2 className="uppercase text-4xl text-[#135689] font-bold">Nhà máy OZ Farm</h2>
            <p className="text-4xl text-[#135689] uppercase">và hành trình 12 năm phá vỡ mọi kỷ lục</p>
          </div>
        </div>
      </section>
      <Certificate />
      <Feedback />
      <FormOrder />
      <Experience />
    </main>
  )
}

export default page