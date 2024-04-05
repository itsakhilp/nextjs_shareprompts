// "use client";

// import { useState, useEffect } from "react";

// import { useRouter, useSearchParams } from "next/navigation";

// import Form from "@components/Form";


// const EditPrompt = () => {
//   const searchParams = useSearchParams();
//   const promptId = searchParams.get("id");

//   const router = useRouter();
  
//   const [submitting, setSubmitting] = useState(false);
//   const [post, setPost] = useState({
//     prompt: "",
//     tag: "",
//   });

//   useEffect(() => {
//     const getPromptDetails = async () => {
//       const response = await fetch(`/api/prompt/${promptId}`);
//       const data = await response.json();
//       console.log(data);

//       setPost({
//         prompt: data.prompt,
//         tag: data.tag,
//       });
//     };
//     if (promptId) getPromptDetails();
//   }, [promptId]);

//   const updatePrompt = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     if(!promptId) return alert('Prompt Id not found')

//     try {
//       const response = await fetch(`api/prompt/${promptId}`, {
//         method: "PATCH",
//         body: JSON.stringify({
//           prompt: post.prompt,
//           tag: post.tag,
//         }),
//       });

//       if (response.ok) {
//         router.push("/");
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };
//   if (!promptId) {
//     // Render loading state or handle error when promptId is not available
//     return <div>Loading...</div>;
//   }
//   return (
//     <Form
//       type="Edit"
//       post={post}
//       setPost={setPost}
//       submitting={submitting}
//       handleSubmit={updatePrompt}
//     />
//   );
// };

// export default EditPrompt;


"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditPrompt = () => {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();
      console.log(data);

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt Id not found");

    try {
      const response = await fetch(`api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!promptId) {
    // Render loading state or handle error when promptId is not available
    return <div>Loading...</div>;
  }

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

const SuspenseEditPrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
};

export default SuspenseEditPrompt;
