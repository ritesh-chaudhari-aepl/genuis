import { useState } from "react";

const ReadMore = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <section
      id="faq-read-more"
      className="bg-primaryWhite mx-auto max-w-screen-xl m-auto my-16 px-6"
    >
      <div className="card flex flex-col gap-4 my-8 ">
        {/* 1 */}
        <h3 className="text-3xl font-semibold tracking-wide text-black font-Inter">
          Why the High Demand for Homework Assistance?
        </h3>

        <p className="text-base text-justify text-black font-Inter">
          The debate between teachers and students regarding the demand for
          homework assistance continues, but there&apos;s no denying the
          increasing need for the best college homework help websites for
          university students. Several reasons drive this demand, even if not
          all are agreed upon by educators. Studies in the field of education
          reveal that over 56% of students experience stress due to their
          homework and require online homework help for all subjects. This need
          has escalated to unprecedented levels during the pandemic, primarily
          due to the knowledge gap between students and teachers. Here, we shed
          light on the importance of homework assistance, the services it
          offers, and the factors contributing to its significant growth.
        </p>
        {isShowMore && (
          <div className="flex flex-col gap-6 text-left">
            {/* 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Genius Tutors - Your Trusted Homework Assistance Partner for
                University Students
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                Let&apos;s dive deep into the world of Genius Tutors, your go-to
                destination for high-quality homework assistance. In this
                comprehensive overview, we&apos;ll provide you with all the
                essential information. Genius Tutors boasts a robust team of
                subject matter experts who are available 24/7 to assist students
                with their homework challenges. We have a dedicated operations
                team overseeing every aspect, ensuring you receive a enriched
                online college homework help and a top-notch learning
                experience. Our primary focus is to offer aid to students when
                they find themselves in a bind. If you ever require expert
                assistance with your studies or homework, Genius Tutors is your
                reliable partner. We are committed to delivering top-tier online
                homework help well before your deadline. Our ultimate
                achievement is the satisfaction of the college and university
                students who have benefited from our services. Providing
                students with optimal college homework assistance is our core
                mission.
              </p>
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Premium Homework Assistance Services for American Colleges
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                When dealing with assignments assigned by your college
                professors, procrastination is your worst enemy. Instead of
                wasting valuable time searching through books or consulting
                peers, Genius Tutor&apos;s experts recommend reaching out to our
                college homework assistance team. This not only affords you
                ample time to complete your homework but also allows you to
                focus on other high-priority tasks without compromising your
                academic performance. Our subject experts possess an outstanding
                track record of offering expert guidance and assistance to
                students across various disciplines. For any subject, we have a
                dedicated team of experts ready to assist. Our college homework
                assistance team excels in tackling assignments and is proficient
                in providing students with step-by-step solutions and
                problem-solving explanations.
              </p>
              <table className="table-auto width-full mb-4 border-collapse text-black">
                <thead>
                  <tr>
                    <th className="border border-y border-b-2 border-r-0 border-l-0 border-[#dee2e6] p-3">
                      Homework Help Services
                    </th>
                    <th className="border border-y border-b-2 border-r-0 border-l-0 border-[#dee2e6] p-3">
                      Subjects
                    </th>
                    <th className="border border-y border-b-2 border-r-0 border-l-0 border-[#dee2e6] p-3">
                      Benefits
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Assignment Help
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Math
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      800+ Ph.D. Experts
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Live Session
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Statistics
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      24*7 Availability
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      text Solutions
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Economics
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Detailed explanations
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Lab Report Writing
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Chemistry
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Affordable Pricing
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Project Report Writing
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Physics
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Money Back Guarantee
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Programming
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      How will recycling help us
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Zero grammatical error
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Presentation Writing
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      The top environmental problems & ways to fight them
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      High-quality content
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Web / App/ Game Development / Graphic Design
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      How your field experiences shaped your career goals
                    </td>
                    <td className="p-3 border border-y border-b-0 border-r-0 border-l-0 border-[#dee2e6]">
                      Zero plagiarism
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 4 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Acknowledging students&apos; difficulties leading to the need
                for homework assistance websites.
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                Genius Tutors was created as a response to the evolving needs of
                students beyond traditional offline support. It serves as a
                dynamic platform where students can directly engage with experts
                for academic assistance. The founders of this innovative
                platform bring with them extensive tutoring experience and an
                exceptional track record in providing online homework
                assistance. At Genius Tutors, we deeply empathize with the
                challenges that students face, and we fully understand the
                reasons why they turn to online college homework assistance. We
                have meticulously tailored our services to effectively address
                these pain points and provide the support and guidance that
                students need.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Here are the common challenges that lead students to wonder,
                &quot;Is there anyone who can help me with my homework?&quot;
              </p>
              <ul className="list-disc list-inside text-black">
                <li>Complex subject concepts that are difficult to grasp.</li>
                <li>Lack of understanding in tackling homework assignments.</li>
                <li>Dissatisfaction with the quality of written content.</li>
                <li>Confusion about homework formatting.</li>
                <li>Time constraints leading to late homework submissions.</li>
                <li>Uncertainty about the accuracy of homework solutions.</li>
                <li>
                  Distrust in local educators&apos; ability to provide accurate
                  homework guidance.
                </li>
                <li>Desire to improve grades.</li>
                <li>
                  Financial concerns regarding personalized offline tutoring.
                </li>
                <li>
                  Reluctance to incur additional expenses for learning
                  materials.
                </li>
                <li>Unfavorable experiences with college instructors.</li>
              </ul>
              <p className="text-base text-black text-justify font-Inter">
                In moments of doubt, Genius Tutors is here to provide students
                with the necessary homework assistance.
              </p>
            </div>
            {/* 5 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Genius Tutors Homework Assistance Online - Solutions Tailored
                for Every Challenge
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                At Genius Tutors, we understand that homework solutions are not
                just about finding the right answers; they are about the journey
                of learning. That&apos;s why we have carefully considered and
                analyzed the challenges students face to develop solutions that
                enhance their educational experience. Our main goal is to create
                an enriching learning environment for all students, regardless
                of their subjects, demographics, race, or social status.
                Let&apos;s explore the innovative solutions we have devised for
                students seeking homework assistance.
              </p>
              <ul className="list-disc list-inside text-black">
                <li>
                  Comprehensive understanding of complex subjects from
                  experienced tutors.
                </li>
                <li>
                  Plagiarism-free homework solutions crafted by subject matter
                  experts.
                </li>
                <li>Expertly crafted assignments and homework from scratch.</li>
                <li>High-quality content with impeccable grammar.</li>
                <li>
                  Logical content flow and adherence to specified structures.
                </li>
                <li>Assistance in meeting homework submission deadlines.</li>
                <li>
                  Accurate homework answers for subjects like Math, Physics,
                  Chemistry, Engineering, and more.
                </li>
                <li>
                  Highly qualified tutors with extensive teaching experience.
                </li>
                <li>
                  Learning solutions with step-by-step explanations for clearing
                  doubts.
                </li>
                <li>
                  Access to top-tier subject matter experts through video
                  solutions and live sessions.
                </li>
                <li>Affordable pricing for assistance in all subjects.</li>
                <li>
                  Free citations and expert recommendations with homework help.
                </li>
              </ul>
              <p className="text-base text-black text-justify font-Inter">
                These aspects collectively make Genius Tutors one of the premier
                online college homework assistance platforms.
              </p>
            </div>
            {/* 6 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Genius Tutors - Your Reliable Companion for University and
                Graduate Students
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                The struggles with homework often lead to challenges in
                completing assignments effectively. Students pursuing advanced
                studies at universities and graduate schools frequently grapple
                with issues such as lack of knowledge, plagiarism concerns,
                doubts, and difficulties in explaining their answers logically.
                Recognizing these challenges, Genius Tutors introduced online
                assignment assistance.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Assignment assistance services are not new, but the challenge
                lies in choosing the right resources and utilizing them wisely
                to ensure academic success. Genius Tutors has taken it upon
                itself to make this process easier for you. We&apos;ve gone the
                extra mile to carefully vet and onboard thousands of highly
                qualified assignment experts into our team.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Finding the right resources for academic success can be
                time-consuming and challenging. Genius Tutors not only reduces
                the time students spend researching resources but also ensures
                they receive the necessary assistance for their assignments. We
                understand that university and graduate students are often
                overwhelmed with multiple assignments. Genius Tutors simplifies
                the process by offering students 100% accurate, plagiarism-free
                solutions with step-by-step explanations. This makes our
                platform a reliable resource that helps students save time,
                focus on other priorities, and succeed in their academic
                pursuits.
              </p>
            </div>
            {/* 7 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Break the Chains of Homework Stress with College Homework
                Assistance
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                We&apos;ve previously discussed why students need homework
                assistance, but there are various reasons why college students
                should opt for college homework assistance. Homework and
                assignments at the college level are considerably more
                challenging than those in high school. College students often
                find themselves struggling due to the conceptual complexity of
                their assignments and tight deadlines. Colleges design these
                assignments to mirror real-world situations, demanding a deep
                understanding of the subject and conceptual clarity. Genius
                Tutor&apos;s college homework assistance not only addresses
                these challenges but also ensures students achieve a deeper
                understanding through step-by-step solutions with explanations.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                If you&apos;re looking for expert guidance to overcome obstacles
                and complete your homework within the specified deadline,
                it&apos;s time to turn to Genius Tutors. Our college homework
                assistance team is ready to assist students worldwide, whether
                you&apos;re in the USA, UK, Canada, Australia, or the UAE. We
                ensure that you not only complete your homework but also pursue
                your dreams without succumbing to study-related stress.
              </p>
            </div>
            {/* 8 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Why Do Students Trust Genius Tutor&apos;s Experts?
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                In the ever-evolving EdTech industry, we have witnessed
                firsthand the struggles that students face. It is not uncommon
                for educational institutions to assign a multitude of writing
                assignments simultaneously, in an effort to manage the extensive
                coursework within a specified timeframe. While this is not
                intended to overwhelm students, the sheer volume of writing
                tasks can leave them feeling stressed and overwhelmed. This is
                where Genius Tutors steps in, offering a lifeline of homework
                assistance and essay writing services. Our aim is not only to
                alleviate the pain that students experience but also to enhance
                their academic journey in the process.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Genius Tutors understands the overwhelming stress and anxiety
                that can arise from writing assignments. The constant pressure
                can be draining. That&apos;s why our writing services cover
                every aspect of these tasks, from conducting research and
                developing concepts to creating content and proofreading. Our
                team of writing specialists is dedicated to providing students
                with comprehensive support, relieving them from the struggles of
                essay writing. The desire to excel often pushes students to seek
                expert assistance, even though it requires a significant
                investment of time and effort. We frequently receive requests
                like, &quot;Can you write my essay?&quot; And our answer is
                always a resounding &quot;Yes!&quot; We work tirelessly to
                bridge the knowledge gap and alleviate students&apos; stress.
                Our thriving community of experts goes above and beyond to
                deliver essays and other writing assignments on time. These
                factors are why students trust us with their academic needs.
              </p>
            </div>
            {/* 9 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Why the Popularity of Online College Homework Assistance
                Services Expanding?
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                The growth of online college homework assistance websites can be
                attributed to various factors. Educational experts have
                conducted research on students&apos; productivity and found that
                while universities and graduate schools assign multiple writing
                and other assignments, they often don&apos;t teach students how
                to tackle them. This has proven counterproductive for some
                students, prompting them to seek online homework assistance from
                platforms like Genius Tutors.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Key Factors Driving the Rapid Growth of Online College Homework
                Assistance Services:
              </p>
              <ul className="list-disc list-inside text-black">
                <li>
                  <span className="font-medium">All Subjects Covered:</span>{" "}
                  Online homework assistance websites provide access to a wide
                  range of subjects, allowing students to choose the topics they
                  need assistance with. This convenience ensures that students
                  receive expert help tailored to their specific needs and keeps
                  them ahead of the competition.
                </li>
                <li>
                  <span className="font-medium">24/7 Availability: </span>
                  Students require flexibility to study, even after school
                  hours. Traditional support from teachers may not be sufficient
                  in addressing their needs. In this scenario, 24/7 homework
                  assistance becomes essential, especially for students pursuing
                  advanced studies. Genius Tutor&apos;s team of experts is
                  committed to meeting students&apos; requirements round the
                  clock.
                </li>
                <li>
                  <span className="font-medium">
                    Customized Learning Experience:
                  </span>{" "}
                  One distinguishing feature of Genius Tutors is our commitment
                  to providing a customized learning experience. This
                  flexibility encourages students to learn at their own pace,
                  ensuring that they fully grasp the concepts they&apos;re
                  studying.
                </li>
                <li>
                  <span className="font-medium">Cost-Effective: </span>Over
                  time, in-person tutoring has become more expensive, whereas
                  online homework assistance is often more budget-friendly.
                  While costs may vary depending on factors like the
                  subject&apos;s complexity, service type, and duration,
                  students can access assistance at cost-effective prices.
                </li>
              </ul>
              <p className="text-base text-black text-justify font-Inter">
                These aspects collectively make Genius Tutors one of the premier
                online college homework assistance platforms.
              </p>
            </div>
            {/* 10 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Genius Tutors Homework Assistance: Streamlining Your Study
                Experience
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                It&apos;s common for students to blame their lack of study time
                or effort for their academic challenges. However, it goes beyond
                mere time allocation. Students who consistently achieve their
                desired results and excel in exams often employ a
                well-structured strategy to streamline their studies. Inadequate
                learning and a failure to align studies with their goals can
                lead to difficulties. This not only hampers their learning
                efficiency but also creates various challenges due to time
                constraints and the weight of existing coursework.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Homework assistance online has proven effective in streamlining
                coursework and enhancing the learning process. Students can
                complete their courses on time and effectively manage their
                priorities with the assistance of homework helpers. Genius
                Tutor&apos;s team of experts supports students in setting and
                achieving their priorities, ensuring that their learning
                experience is not only active but also enables them to give
                their best in exams and achieve top grades.
              </p>
            </div>
            {/* 11 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                &quot;Help Me with My Homework&quot; - Is It Legal to Seek and
                Offer Assistance?
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                It&apos;s not uncommon for students to have concerns about the
                legality of professional expert assistance services like those
                offered by Genius Tutors. Worries often stem from the potential
                consequences of negative outcomes. We understand these concerns
                and have taken proactive steps to ensure that our homework
                assistance service is legal and does not burden students.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Here&apos;s why Genius Tutor&apos;s homework assistance service
                is considered legal:
              </p>
              <ul className="list-disc list-inside text-black">
                <li>
                  <span className="font-medium">Personalized Assistance: </span>
                  Our service is similar to offline tutoring, which is
                  considered a legal professional service. Homework assistance
                  online closely mirrors this service, offering the same level
                  of expertise but in a digital format. There are no legal
                  issues associated with seeking such assistance.
                </li>
                <li>
                  <span className="font-medium">Educational Focus: </span>We
                  prioritize meaningful education for students and ensure that
                  our assistance goes beyond merely providing answers. We follow
                  a student-centric approach aimed at improving students&apos;
                  understanding and knowledge.
                </li>
                <li>
                  <span className="font-medium">Legal Compliance: </span>Genius
                  Tutor strictly adheres to legal regulations in the USA, UK,
                  and other European countries. We do not engage in any
                  activities that are considered illegal in these regions.
                </li>
                <li>
                  <span className="font-medium">
                    Transparent Terms and Conditions:{" "}
                  </span>
                  We have clearly outlined the terms and conditions on our
                  website and encourage students to review them before using our
                  services. This transparency ensures that students fully
                  understand the parameters of our service.
                </li>
                <li>
                  <span className="font-medium">Ownership of Tasks: </span>We
                  emphasize that students have complete ownership of the tasks
                  we assist them with. This further underscores the legality of
                  our service.
                </li>
              </ul>
              <p className="text-base text-black text-justify font-Inter">
                These aspects collectively make Genius Tutors one of the premier
                online college homework assistance platforms.
              </p>
            </div>
            {/* 12 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Genius Tutors: Elevating Academic Growth through Quality
                Homework Assistance
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                Balancing quality and quantity in one&apos;s studies is
                essential for academic success. At Genius Tutors, we understand
                that emphasizing one over the other can lead to suboptimal
                results, especially for students pursuing advanced studies. To
                address this, we focus on combining quality and quantity
                effectively. Our experts know that achieving the right balance
                is crucial for students&apos; academic growth.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Achieving better learning requires the right approach.
                Recognizing the importance of integrating quality with quantity,
                Genius Tutors focuses on solving the myriad challenges faced by
                students. This approach enhances students&apos; learning
                experience, expands their knowledge, and facilitates information
                retention. The practice of enhancing study methods and academic
                improvement has witnessed substantial growth due to the
                increasing use of our service.
              </p>
            </div>
            {/* 13 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                Genius Tutors: Your Top Choice as a Homework Doer
              </h3>
              <p className="text-base text-black text-justify font-Inter">
                For Genius Tutors, students are our top priority. We go to great
                lengths to become the premier homework assistance provider for
                students. Our commitment goes beyond providing college homework
                assistance; it extends to changing the educational landscape and
                bridging the knowledge gap.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                Our platform offers various services, including homework
                assistance, to cater to students&apos; diverse academic needs.
                With a substantial team of subject matter experts, including
                over 800 Ph.D. tutors, we ensure that students receive top-notch
                solutions. Our platform has been chosen as the top choice for
                students due to its quality, affordability, prompt delivery, and
                excellent post-service support.
              </p>
              <p className="text-base text-black text-justify font-Inter">
                You can access our solutions through our website or download our
                app from the{" "}
                <a
                  href="https://play.google.com/store/games?hl=en-IN"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play Store
                </a>{" "}
                and the{" "}
                <a
                  href="https://www.apple.com/in/app-store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  App Store
                </a>
                . Regardless of your location, our homework help app allows you
                to receive expert assistance by simply snapping a photo of your
                homework question. Our domain experts will provide accurate
                answers within your specified deadline.
              </p>
            </div>
            {/* 14 */}
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-semibold tracking-wide leading-[3rem] text-black">
                Frequently Asked Questions - Homework Assistance Websites
              </h3>
              {/* 1 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  Is there a website that can do my homework?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  Yes, if you&apos;re searching for a website that can assist
                  you with your homework, Genius Tutors is a reliable option.
                  You can visit www.genius-tutors.com to access a wide range of
                  homework assistance services provided by subject matter
                  experts.
                </p>
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  How can I get help with college homework?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  To receive college homework assistance, you can visit
                  www.genius-tutors.com. Sign up and complete the order form
                  with your requirements. Our team will assist you in getting
                  the college homework help you need, guiding you through the
                  process from start to finish.
                </p>
              </div>
              {/* 3 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  What is the best online homework help?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  The best online homework help website is one that offers a
                  wide range of subjects, provides expert solutions around the
                  clock, and maintains an excellent reputation. All these
                  qualities are present in Genius Tutors, making it one of the
                  best online homework assistance platforms in the industry.
                </p>
              </div>
              {/* 4 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  Where can I get answers for my homework?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  If you&apos;re seeking the best homework answers for your
                  assignments, we recommend visiting Genius Tutors. Our platform
                  provides personalized homework assistance with step-by-step
                  explanations. You can expect 100% accurate solutions delivered
                  well before your specified deadline.
                </p>
              </div>
              {/* 5 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  What is a good app to help with homework?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  For students in search of a quality app for homework
                  assistance, Genius Tutor&apos;s homework help app is an
                  excellent choice. You can download the app from the Google
                  Play Store and the App Store. The app allows you to submit
                  your homework questions by snapping a photo, and our domain
                  experts will provide accurate answers within your specified
                  deadline.
                </p>
              </div>
              {/* 6 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  How can I get homework help?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  To access homework assistance, sign up on
                  www.genius-tutors.com. After completing the sign-up process,
                  fill out the order form with your specific requirements. Our
                  experts will get in touch with you and provide personalized
                  homework assistance at an affordable price from subject matter
                  experts.
                </p>
              </div>
              {/* 7 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  What is the best college homework help website?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  The best college homework help website is one that prioritizes
                  creating an exceptional student experience. Genius Tutors
                  offers a strong pool of tutors and delivers 100% unique,
                  high-quality solutions. The prices for college homework help
                  are budget-friendly, making it an ideal choice for students.
                </p>
              </div>
              {/* 8 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  What is the best homework help website?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  The best homework help website aims to enhance students&apos;
                  learning experience by providing expert assistance. Genius
                  Tutor is a reputable homework assistance website that acts as
                  both a guide and solution provider for students, offering
                  personalized solutions to help improve their grades
                  significantly.
                </p>
              </div>
              {/* 9 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold tracking-wide leading-[3rem] text-black font-Inter">
                  What is the best homework helper?
                </h3>
                <p className="text-base text-black text-justify font-Inter">
                  If you&apos;re looking for the best homework helper to
                  complete your assignments and excel in your subjects, Genius
                  Tutor is the right choice. We have subject matter experts in
                  over 500 subjects across various fields, providing
                  plagiarism-free, 24/7 homework assistance at an affordable
                  price. Our commitment to delivering quality and personalized
                  assistance makes us the best homework helper for students
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="button items-center flex justify-center">
          <button
            aria-label="read more btn"
            title="Read More"
            onClick={toggleReadMoreLess}
            className=" rounded-full bg-yellow-dark text-base md:text-xl text-black px-8 py-3 sm:mb-10 mt-6 transition hover:bg-indigo-700 capitalize"
          >
            {isShowMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadMore;
