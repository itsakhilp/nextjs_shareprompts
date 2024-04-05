import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-start w-full max-w-full flex-col">
      <h1 className="head_text text-start">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc max-w-md left">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            className="form_textarea"
            value={post.prompt }
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here"
            required
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{``}
            <span className="font-normal">(#webdevelopment, #nextjs, #ai)</span>
          </span>

          <input
            className="form_input"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
          ></input>
        </label>

        <div className="flex-end mb-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">Cancel</Link>
          
          <button type="submit" disabled={submitting} className="bg-primary-orange rounded-full px-5 py-1.5 text-sm text-white">
            {submitting ? `${type}...` : type} 
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
