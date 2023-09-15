import Provide from "./provide"

export function generateMetadata({params}) {
    return {
        title: `${params.categories} programming articles.`,
        description: `handbookofcoding | ${params.categories} Instructional, informative, blog posts at all levels. Blog posts that guide the development of better, secure and modern software.`,
        robots: "index, follow",
    }
}

function CategoryBlogEn({ params }) {

    return (
        <div>
            <Provide params={params}/>
        </div>
    )
}

export default CategoryBlogEn