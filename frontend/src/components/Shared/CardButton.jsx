function CardButton({ label, image_url }) {
  return (
    <div>
      <button className='card flex flex-col justify-center btn-warning btn-outline shadow-xl p-2'>
        <div className='avatar'>
          <div className='rounded shadow w-14 h-14'>
            <img src={image_url} alt='Shoes' className='rounded-xl' />
          </div>
        </div>
        <div className='items-center text-center'>
          <p>{label}</p>
        </div>
      </button>
    </div>
  );
}

export default CardButton;
