import { KontsaArray } from "../../contentArrays.js"
import { useLoaderData } from "react-router-dom"
import { NavLink } from "react-router-dom"

//Loader palauttaa vain sivua vastaavan blogipostauksen blogiarraystä
export async function loader({ params }) {
    const blog = KontsaArray.blog
    let blogpost = blog.find(p => p.url === params.blogPost)
    //console.log("Blogloader: Projecttitle:", params.blogPost)
    if (!blogpost) {
            throw new Response("", {
                status: 404,
                statusText: "Blog post seeked not found"
        })
    }
    return blogpost;
}

export function BlogItem() {
    const blogpost = useLoaderData();
    if (!blogpost) {
        throw new Response("", {
            status: 404,
            statusText: "Blog post seeked not found"
        })
    }
    return (
        <>
        {/*
        Generoidaan sivun ylälaitaan blogin otsikko ja linkki takaisin
        */}
        <h1><NavLink to="/blog/">Blog</NavLink> / {blogpost.title}</h1>
        
        {<div className="blogiotsikkokuva"><img src={blogpost.imgurl} alt={blogpost.title} /></div> }
        <div className="prose">
            {/*
            Renderöidään blogipostauksessa määritelty elementti l. sivun sisältö.
            Tämä on ehkä vähän tökerö tapa rakentaa blogipostaukset ja ehkä tässä joskus
            siirrytään markdownin maailmaan, mutta nyt haluan säilyttää vapauden kikkailla
            ja kaikkailla blogipostauksiin uniikkia css:ää ym.

            Sama renderöintilogiikka pätee myös arvioiden puolella.
            */}
            {blogpost.element}
        </div>
        </>
    )
}