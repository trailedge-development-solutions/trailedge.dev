import Service from './Service';

export default function Services() {
  const servs = [
    {
      title: 'Development',
      des: '...'
    }, {
      title: 'Design',
      des: '...'
    }, {
      title: 'Deployment',
      des: '...'
    }
  ];

  return (
    <div className='justify-align align-center mx-40 -mt-40 mb-20'>
      <h2 className='pl-10 py-8 text-3xl text-emerald-400 font-bold'>Services</h2>
      <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
	{servs.map(({ title, des }) => (
	  <Service title={title} des={des} />
	))}
      </div>
    </div>
  );
}
