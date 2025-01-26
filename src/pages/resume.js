import React from "react";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";
import "../styles/main.scss";
import ExperienceEntry from "../components/ExperienceEntry";

const ResumePage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="Section resume-section">
          <h2 className="custom-title">Introduction</h2>
          <div className="block">
            I am a data scientist and computer vision researcher with a Master's
            degree in Artificial Intelligence and Data Processing with{" "}
            <a href="https://www.fi.muni.cz/catalogue-current/?program=nmgr_umi_cz">
              Machine Learning and Artificial Intelligence Specialization
            </a>{" "}
            from Masaryk University. My master's thesis was written in
            collaboration between{" "}
            <a href="https://www.dkfz.de/en/index.html">
              German Cancer Research Center (DKFZ)
            </a>{" "}
            and the{" "}
            <a href="https://cbia.fi.muni.cz/">
              Centre for Biomedical Image Analysis (CBIA)
            </a>{" "}
            at Masaryk University on Generative AI for Medical Imaging. I have
            experience in leveraging advanced machine learning and deep learning
            to uncover profound insights within data and translate these
            revelations into valuable, real-world solutions.
          </div>
          <div className="block">
            I contributed to successful projects including not only developing{" "}
            <strong>OCR</strong> systems for invocies in low-resource languages
            in the{" "}
            <a href="https://docdepo.gaussalgo.com/en-GB">
              Intelligent Backoffice (IBO)
            </a>{" "}
            project, conducting <strong>recommending</strong> machine learning
            research at <a href="mapy.cz">Mapy.cz</a>, and improving the
            digitization via <strong>super-resolution</strong> of Hussite texts
            as part of the{" "}
            <a href="https://nlp.fi.muni.cz/projekty/ahisto/portal/index.php">
              AHISTO
            </a>{" "}
            project. I am proficient in Python with expertise in PyTorch.
          </div>
          <div className="block">
            Colleagues describe me as a driven and passionate person who
            maintains a positive, proactive attitude when faced with adversity.
            I thrive in a collaborative environment, always focused on
            delivering innovative solutions and continuously learning. I enjoy
            presenting new ideas. Connect with me on{" "}
            <a href="https://www.linkedin.com/in/mikulas-bankovic/">LinkedIn</a>{" "}
            or reach out via email at{" "}
            <a href="mailto:mikulas.bankovic27@gmail.com">
              mikulas.bankovic27@gmail.com
            </a>
            .
          </div>
        </div>

        <div className="Section resume-section">
          <h2 className="custom-title">Experience</h2>

          <ExperienceEntry
            title="Computer Vision Research Engineer"
            company="Masaryk University"
            startdate="Mar 2022"
            enddate="May 2023"
            description="As part of the Intelligent Back-Office project, 
            a university research endeavor aimed at challenging startups
            in automating document processing, particularly scanned invoices. 
            I led the implementation of our custom OCR system. 
            
            Operating within resource-constrained language
            settings, specifically Czech, my role involved handling annotated
            documents. This encompassed preprocessing data and training models.
            Additionally, I orchestrated post-processing procedures to rectify
            errors, such as the second OCR run, which, after NER classification,
            identified fields as numbers. The outcome of this effort yielded a
            robust pipeline capable of processing approximately 70% of invoices
            originating from low-quality scans and photos."
            skills={["Python", "Deep Learning", "Other Skills"]}
          />

          <div className="block">
            Machine Learning Researcher Seznam.cz Within the research team at
            Mapy.cz, a project aimed at offering an enhanced alternative to
            Google Maps, I assumed the role of developing a ranking model to
            enhance search engine outcomes. My responsibilities encompassed the
            processing of a vast volume of user interactions, converting them
            into a comprehensive dataset. Leveraging Machine Learning and Deep
            Learning methodologies, I trained models with the objective of
            identifying optimal solutions. The results were rigorously evaluated
            through an A/B test, demonstrating an improved ranking performance
            on crucial samples, while closely maintaining the overall quality.
            September 2020 - December 2021
          </div>
          <div className="block">
            Student Research Assistant Masaryk University In my role on the
            AHISTO project, our objective was to digitize ancient Hussite texts.
            I took on the task of investigating the potential of
            super-resolution techniques to enhance the performance of the
            open-source available OCR (Optical Character Recognition) system. By
            implementing this idea, I achieved a singificant improvement in OCR
            accuracy, likely attributed to challenging assumptions that were
            previously inherent in the OCR systems. This contribution played a
            pivotal role in advancing the project's goals and outcomes. January
            2011 - May 2013
          </div>
          <div className="block">
            Student Research Assistant University of Heidelberg In my role as a
            HiWi, I focused on processing openly accessible CT scans and
            conducting image registration across various breathing phases of
            patients. I effectively utilized the SimpleITK and Elastix libraries
            for this purpose. This endeavor involved an extensive exploration of
            hyperparameters and the application of various visualization
            techniques. Ultimately, I selected the top-performing models to
            establish speed and quality benchmark within a university-developed
            registration framework. January 2023 - April 2023
          </div>
          <div className="block">
            Machine Learning Engineer Simple Finance In this role, I was tasked
            with developing a predictive model for housing prices in the USA. I
            took the initiative to enhance my skills in working with AWS servers
            and data storage. I created a custom PyTorch neural network from
            scratch, which involved extensive research, coding, and testing to
            compete with existing gradient boosting models. Through this
            experience, I acquired valuable expertise in AWS infrastructure,
            data management, and advanced machine learning techniques,
            strengthening my capabilities as a data scientist. January 2020 -
            February 2020
          </div>
          <div className="block">
            Junior Python Developer Resideo In my role, I conducted web scraping
            to collect product reviews from platforms like Amazon and BestBuy,
            bypassing APIs and CAPTCHA restrictions. The goal was to perform
            sentiment analysis for quality assurance. I successfully managed web
            scraping, addressing site changes through regular maintenance.
            Although sentiment analysis required manual validation and had some
            complexities, it aided in identifying product issues. This
            data-driven approach improved product quality and customer
            satisfaction. October 2018 - October 2019
          </div>
        </div>

        <div className="Section resume-section">
          <h2 className="custom-title">Education</h2>
          <div className="block">
            DKFZ German Cancer Research Center My primary objective was to
            conduct a comparative analysis of generative models applied to image
            synthesis within the medical field. I developed custom preprocessing
            techniques tailored to CT scans from 300 patients, including tasks
            such as table removal and background replacement. Leveraging GANs
            and Diffusion models libraries, I proceeded to train these models on
            a newly created dataset. The outcome of my work demonstrated the
            capability to generate results resembling the original samples using
            both methods, each with its own set of advantages and limitations.
            October 2022 - July 2023
          </div>
          <div className="block">
            Masaryk University Brno Master of Science Artificial Intelligence
            and Data Processing Grade: 1.82 September 2020 - June 2023
          </div>
          <div className="block">
            University of Bergen Erasmus+ Exchange January 2022 - July 2022
          </div>
          <div className="block">
            Masaryk University Brno Bachelor of Science Artificial Intelligence
            and Natural Language Processing Grade: 2 September 2016 - June 2020
          </div>
          <div className="block">
            University of Tartu Erasmus+ Exchange September 2019 - December 2019
          </div>
        </div>
        <div className="Section resume-section">
          <h2 className="custom-title">
            Skills::Programming Languages & Tools
          </h2>

          <div className="block">
            Python I have been programming in Python since the first year of the
            university, and all of my projects were primarily written in Python.
            I can efficiently use new features and tricks to improve code speed
            and readability. Data Preprocessing and Data Engineering
          </div>
          <div className="block">
            I can process various data formats using Python libraries, such as
            numpy or Pandas, from images to spatial data. Preprocessing usually
            includes exploratory analysis, feature engineering, data curation,
            and standardization. I can create efficient pipelines to avoid
            unnecessary data inflations or transfers. I can work with big data,
            collecting data from Hadoop clusters or SQL databases. Deep Learning
            and Machine Learning
          </div>
          <div className="block">
            I possess extensive experience in evaluating and testing classical
            machine learning methodologies and cutting-edge solutions like
            neural networks and gradient-boosting trees. I can leverage the
            scikit-learn framework to evaluate experiments appropriately. I am
            meticulous in avoiding common pitfalls associated with data
            analysis, ensuring the accuracy and reliability of my findings.
            Additionally, I excel in efficiently tracking metrics and training
            progress, utilizing tools like Weights & Biases (wandb) to
            streamline the process. Natural Language Processing and Computer
            Vision
          </div>
          <div className="block">
            I regularly use PyTorch and hugging face model hubs to save my
            models and load pre-trained models. I am skilled in using these
            frameworks to perform the most modern Natural Language Processing
            with Large Language Models and Computer Vision, including Generative
            Adversarial Networks and diffusion models. I also worked extensively
            with nltk and openCV libraries. Data Visualisation
          </div>
          <div className="block">
            I am skilled in creating insightful visualizations using tools like
            matplotlib, seaborn and plotly. I can create interactive plots as
            well as simple graphics to support and show insights in data.
            Reproducibility and Version Control
          </div>
          <div className="block">
            I am fond of the versioning of the data and models with tools such
            as Git-LFS, ensuring a smooth collaborative workflow and
            reproducibility. I can containerise solutions with Docker and deploy
            them through CI/CD pipelines for scalable product delivery. Linux
          </div>
          <div className="block">
            I am in the process of unlocking my full potential in Linux. I can
            efficiently script in bash and use everyday commands. I can use
            available open-source tools for my leverage in work tasks.
          </div>
        </div>

        <div className="Section resume-section">
          <h2 className="custom-title">Interests</h2>
          <div className="block">
            When I'm not working as a data scientist, I love spending time
            outdoors. In the city of Heidelberg, I often go slacklining or
            swimming outside during the warmer months.
          </div>
          <div className="block">
            During indoor days, you can often find me in the local bouldering
            gym. I am often also immersed in music, either strumming my guitar
            or playing bass in spontaneous jam sessions with my roommates.
            Alternatively, I indulge in board games, and I also devote a
            substantial portion of my free time to staying updated on the latest
            developments in the exciting world of deep learning."
          </div>
        </div>
        <div className="Section resume-section">
          <h2 className="custom-title">
            {" "}
            Awards & Certifications <FontAwesomeIcon icon={faTrophy} />
          </h2>

          <div className="block">
            Deep Learning A-Z™: Hands-On Artificial Neural Networks
          </div>
          <div className="block">Introduction to Self-Driving Cars</div>
          <div className="block">
            State Estimation and Localization for Self-Driving Cars
          </div>
          <div className="block">Visual Perception for Self-Driving Cars</div>
          <div className="block">
            2 nd Place - DTSE Telekom - NLP hackathon 2019
          </div>
          <div className="block">
            3 rd Place - ŠKODA - UnIT Big Data hackathon 2019
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResumePage;

export const Head = () => <title>xbankov.eu - Resume</title>;
