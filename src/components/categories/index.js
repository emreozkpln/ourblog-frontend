
import { getCategory } from '@/services/service'

async function Categories() {

    const { categories } = await getCategory()

    return (
        <div>
            <div className="flex gap-4 items-center">
                <div className="w-1.5 h-28 bg-color2 rounded-lg"></div>
                {
                    categories && categories.map((item, index) => (
                        <h2 key={index} className="text-3xl font-extrabold text-color2">
                            {item.TR_title} <span className="bg-color3 p-1 text-white rounded-xl shadow-xl">{item.numOfDoc}</span>
                        </h2>
                    ))
                }

            </div>
        </div>
    )
}

export default Categories