import Child from './Child';

function Parent() {
  let name = "Abdul Haseeb Shaikh";
  let favoritetDish = "Mutton Karahi";
  let favoriteColor = "Black";

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-700 to-black '>
      <div className='bg-gray-300 p-8 rounded-lg shadow-lg max-w-sm w-full hover:scale-110 duration-300 ease-in-out '>
        <h1 className='text-3xl font-semibold text-center mb-4'>User Profile</h1>
        <Child name={name} age={favoritetDish} profession={favoriteColor} />
      </div>
    </div>
  );
}

export default Parent;