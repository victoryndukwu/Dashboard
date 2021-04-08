import BigCards from "../components/BigCards";
function User() {
  return (
    <div className="ml-5">
      <h1 className="text-blue-600 m-5 text-lg ">User Profile</h1>
      <BigCards
        title={"Victory Ndukwu"}
        detail={"Frontend Engineer"}
        skill={"Skills"}
        skill1={"HTML, CSS, SCSS, Tailwind"}
        skill2={"JavaScript - ES5, ES6+"}
        skill3={"Version Control using GIT"}
        skill4={"JavaScript Libraries - React JS, Next JS"}
      />
    </div>
  );
}

export default User;
