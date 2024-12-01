import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
      <section>
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              wintervoid </h1>
          <p className="mb-4">
              It seems you stumbled across my webpage! I'm an intermediate programmer and a huge fan of Arch Linux.<br/>
              My current hobbies are music production, gaming (my favorite game is Team Fortress Two), and anything
              computer-related in general.
              
          </p>

          <div className="my-8">
              <BlogPosts/>
          </div>
      </section>
  )
}
