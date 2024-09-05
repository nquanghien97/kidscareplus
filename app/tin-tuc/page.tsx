import { NewsEntity } from '@/entities/news';
import { getNews } from '@/services/news';
import { formatDate } from '@/utils/formatDate';
import { truncateText } from '@/utils/truncateText';
import Image from 'next/image';
import Link from 'next/link';

async function News() {
  const { data } = await getNews({ page: 1, pageSize: 10 }) as { data: NewsEntity[] }
  return (
    <div className="my-8">
      <div className="max-w-6xl m-auto">
        <div className="w-2/3">
          <div className="my-4">
            <h2 className="text-[#2c5d6c] font-semibold text-3xl">Tin tức</h2>
          </div>
          <div className="mt-4">
            {data.map(item => (
              <div className="flex py-4 border-t-[1px] border-[#e1e1e1]" key={item.id}>
                <Link className="w-1/3 px-4 overflow-hidden" href={`/tin-tuc/${item.slug}`}>
                  <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.imageUrl}`} alt={item.title} width={255} height={135} />
                </Link>
                <div className="w-2/3">
                  <div>
                    <Link href={`/tin-tuc/${item.slug}`} className="text-[#2c5d6c] font-bold text-lg">{item.title}</Link>
                  </div>
                  <small className="text-[#9f9e9a]">{`Ngày đăng: ${formatDate(item.createdAt)}`}</small>
                  <div className="my-3 text-justify text-sm" dangerouslySetInnerHTML={{ __html: truncateText(data[0].content, 200) }} />
                </div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default News