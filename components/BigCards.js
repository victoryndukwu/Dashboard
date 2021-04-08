function BigCards(props) {
  return (
    <div className="flex-col justify-center items-center w-11/12 h-80 bg-white rounded shadow-lg">
      <p className="text-blue-600 m-5 pt-4">{props.title}</p>
      <p className="text-gray-500 text-sm m-5">{props.detail}</p>
      <p className="text-blue-600 text-lg m-4">{props.skill}</p>
      <ul className="text-gray-500 text-sm m-5">
        <li>{props.skill1}</li>
        <li>{props.skill2}</li>
        <li>{props.skill3}</li>
        <li>{props.skill4}</li>
      </ul>
    </div>
  );
}

export default BigCards;
