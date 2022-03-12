import Grid from "@mui/material/Grid";
import ContactForm from "./contactForm";
import ContactMe from "./contactMe";

export default function ContactSection() {
  return (
    <section>
      <Grid container mt={5} spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <ContactMe />
        </Grid>
      </Grid>
    </section>
  );
}
