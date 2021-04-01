import { withIronSession } from "next-iron-session";



// 
export default withIronSession(
  async (req, res) => {

    if (req.method === "POST") {
      const { email, password } = req.body.data;
      console.log(email)
      try {
        req.session.set("user", { email });
        await req.session.save();
        return res.status(200);
      } catch (error) {
        return res.status(403).send("there was an internal error when setting the user session")
      }
    }
    return res.status(404).send("");
  },
  {
    cookieName: process.env.SITE_COOKIE,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);