import ContactCTA from "./ContactCTA";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

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
