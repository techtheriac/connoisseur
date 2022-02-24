import dynamic from "next/dynamic";

const WholeLayout = dynamic(() => import("../../components/WholeLayout"), {
  ssr: false,
});

const Contact = () => {
  return (
    <WholeLayout>
      <div>
        <h1>
          COntact
        </h1>
      </div>
    </WholeLayout>
  )
}

export default Contact;