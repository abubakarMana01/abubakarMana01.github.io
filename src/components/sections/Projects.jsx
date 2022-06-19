import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import OtherProjects from "./OtherProjects";
import ProjectListItem from "../ProjectListItem";
import SectionTitle from "../SectionTitle";

export default function Projects() {
	return (
		<ProjectsSection id="work">
			<Fade direction="up" triggerOnce>
				<SectionTitle text="Some things i've built" data="03." />

				<ProjectListItem
					title="Amazon-ish"
					about="Amazon redesign with a modern UI, complete E-Commerce functionality including Payment Processing (Stripe API) and User Authentication."
					technologies={["Next JS", "Framer motion", "Context API", "Stripe"]}
					link={"https://amazon-ish-livid.vercel.app/"}
					github={"https://github.com/abubakarMana01/amazon-ish"}
					image={"/images/amazon_project.png"}
				/>
				<ProjectListItem
					title="Netflix-ish"
					about="A compact single page application to browse for your favorite Movies and TV Shows. Shows rating of movie and description of movie. API provided by themoviedb.org"
					technologies={[
						"React",
						"Styled Components",
						"TMDB API",
						"Authentication",
					]}
					orientation="left"
					link={"https://amazon-ish-livid.vercel.app/"}
					github={"https://github.com/abubakarMana01/netflix-ish"}
					image={"/images/netflix_project.png"}
				/>
				<ProjectListItem
					title="Airbnb-ish"
					about="A modern, responsive, and mobile-friendly website for booking vacation homes. Showing a map of the city and allowing users to search for homes by location, range of vacation"
					technologies={[
						"React",
						"Next JS",
						"Mapbox",
						"API",
						"Styled Components",
					]}
					link={"https://airbnb-ish-4afcyiiph-abubakarmana01.vercel.app"}
					github={"https://github.com/abubakarMana01/airbnb-ish"}
					image={"/images/airbnb_project.png"}
				/>

				<OtherProjects />
			</Fade>
		</ProjectsSection>
	);
}

const ProjectsSection = styled.section``;
