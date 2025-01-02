import { Link } from "react-router-dom";
import ContactCTA from "./ContactCTA";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Button } from "./ui/Button";

const team = [
  {
    name: "Tahir Khan",
    position: "CEO",
    image: "/assets/images/tahir.jpeg",
  },
  {
    name: "Muhammad Haseeb Abbas",
    position: "Managing Director",
    image: "/assets/images/haseeb.jpeg",
  },
  {
    name: "Junaid Khan",
    position: "Head of Marketing",
    image: "/assets/images/juni.JPG",
  },
  {
    name: "Muhammad Jamshed",
    position: "Project Manager",
    image: "/assets/images/Jamshed_profile.png",
  },
  {
    name: "Rishaeel zai",
    position: "Creative Director",
    image: "/assets/images/raseel2.jpeg",
  },

  {
    name: "Atif Awan",
    position: "Full Stack Developer",
    image: "/assets/images/random.jpeg",
  },
];

export default function About() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-gray-50 to-green-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40">
          <div className="text-center">
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AAA <span className="text-primary">Digital</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AAA Digital is a top software consultancy and digital marketing
              company with a skilled team across diverse domains, delivering
              innovative solutions to help businesses thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline">Services</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
          </div>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    style={{ height: "380px", objectFit: "cover" }}
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="text-primary font-extrabold"
                    >
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
