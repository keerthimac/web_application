function CardButton({ label, image_url, handleClick, id }) {
  // console.log(label);
  return (
    <div>
      <button
        title={id}
        onClick={handleClick}
        className='card flex flex-col justify-center btn-warning btn-outline shadow-xl p-2'>
        <div className='avatar'>
          <div className='rounded shadow w-16 h-16'>
            <img src={image_url} alt='Shoes' className='rounded-xl' />
          </div>
        </div>
        <div className='items-center text-center'>
          <p className='text-sm'>{label}</p>
        </div>
      </button>
    </div>
  );
}

export default CardButton;
