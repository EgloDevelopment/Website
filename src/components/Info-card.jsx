function Component(props) {
  return (
    <>
      <div className={"lg:text-center lg:-ml-3 ml-3 pr-5 mt-" + props.marginTop}>
        <h1 className="text-4xl font-bold">
          {props.title}
        </h1>
        <p className="mt-6 font-semibold">
          {props.text}
        </p>
      </div>
    </>
  );
}

export default Component;
