import BackgroundBlob from './BackgroundBlob';

export default function Background() {
  return (
    <>
      <BackgroundBlob
	top='top-[-10rem]'
	smTop='sm:top-[-20rem]'
	left='left-[calc(50%-11rem)]'
	smLeft='sm:left-[calc(50%-30rem)]'
	rotate='rotate-[30deg]'
      />
      <BackgroundBlob
	top='top-[calc(100%-13rem)]'
	smTop='sm:top-[calc(100%-30rem)]'
	left='left-[calc(50%+3rem)]'
	smLeft='sm:left-[calc(50%+36rem)]'
      />
      <BackgroundBlob
	top='top-[calc(100%+14rem)]'
	smTop='sm:top-[calc(100%-3rem)]'
	left='left-[calc(50%-11rem)]'
	smLeft='sm:left-[calc(50%-30rem)]'
	rotate='rotate-[200deg]'
      />
      <BackgroundBlob
	top='top-[calc(100%+24rem)]'
	smTop='sm:top-[calc(100%+7rem)]'
	left='left-[calc(50%+3rem)]'
	smLeft='sm:left-[calc(50%+36rem)]'
      />
      <BackgroundBlob
	top='top-[calc(100%+52rem)]'
	smTop='sm:top-[calc(100%+35rem)]'
	left='left-[calc(50%-8rem)]'
	smLeft='sm:left-[calc(50%-30rem)]'
	rotate='rotate-[200deg]'
      />

    </>
  );
}
