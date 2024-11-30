
const Child = (props: { name: string; age: String; profession: string }) => {
  return (
    <div className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Name:</h2>
        <p className="text-lg text-gray-700">{props.name}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold ">Favorite Dish:</h2>
        <p className="text-lg text-gray-700">{props.age}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold ">Favorite Color:</h2>
        <p className="text-lg text-gray-700">{props.profession}</p>
      </div>
    </div>
  );
}

export default Child;