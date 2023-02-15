function About() {
  return (
    <div className='m-10'>
      <h1 className='text-6xl mb-4'>Web Application</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search construction Materials and see details. This
        project is prepared by
        <strong>
          <a href='https://github.com/keerthimac'> Darshana Keerthirathna</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      {/* <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://twitter.com/hassibmoddasser'>
          Hassib Moddasser
        </a>
      </p> */}
    </div>
  );
}

export default About;
