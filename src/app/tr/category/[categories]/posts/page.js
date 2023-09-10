import Provide from "./provide"

export function generateMetadata({params}) {
    return {
        title: `${params.categories} programlama blog yazıları.`,
        description: `handbookofcoding | ${params.categories} ile ilgili tüm seviyelerde, öğretici, bilgilendiri, blog yazıları. Daha iyi, güvenli ve modern yazılım geliştirmeye yol gösteren blog yazıları`,
        robots: "index, follow",
    }
}

function CategoryBlogTr({ params }) {

    return (
            <div>
                <Provide params={params}/>
            </div>
    )
}

export default CategoryBlogTr