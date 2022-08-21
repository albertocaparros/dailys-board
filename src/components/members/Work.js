function Work({ color, area }) {
  return (
    <div
      className={`p-2 mx-1 my-1 ${color} border-2 border-black rounded-md h-1/2 md:basis-5/12 md:flex-2 md:mx-auto md:flex-1 md:my-0`}>
      <p className='text-base font-medium lg:text-xl'>{area}</p>
    </div>
  );
}

export default Work;
