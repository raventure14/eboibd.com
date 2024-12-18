"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Last updated: December 15, 2024
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <Card className="lg:w-1/4 p-4 lg:p-6 h-fit lg:sticky top-8">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-purple-700">
              Table of Contents
            </h2>
            <ScrollArea className="h-[calc(100vh-200px)] pr-4">
              <nav className="space-y-1">
                {[
                  {
                    id: "interpretation",
                    title: "Interpretation and Definitions",
                  },
                  {
                    id: "collecting-data",
                    title: "Collecting and Using Your Data",
                  },
                  { id: "use-of-data", title: "Use of Your Personal Data" },
                  { id: "retention", title: "Retention of Your Personal Data" },
                  { id: "transfer", title: "Transfer of Your Personal Data" },
                  { id: "delete", title: "Delete Your Personal Data" },
                  {
                    id: "disclosure",
                    title: "Disclosure of Your Personal Data",
                  },
                  { id: "security", title: "Security of Your Personal Data" },
                  { id: "children", title: "Children's Privacy" },
                  { id: "links", title: "Links to Other Websites" },
                  { id: "changes", title: "Changes to this Privacy Policy" },
                  { id: "contact", title: "Contact Us" },
                ].map((section) => (
                  <Button
                    key={section.id}
                    variant="ghost"
                    className={`w-full justify-start py-2 text-left ${
                      activeSection === section.id
                        ? "bg-purple-100 text-purple-800 font-medium"
                        : "text-gray-600 hover:text-purple-600"
                    }`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                  </Button>
                ))}
              </nav>
            </ScrollArea>
          </Card>

          <Card className="lg:w-3/4 p-6 lg:p-10 max-w-4xl mx-auto">
            <div className="prose prose-purple prose-sm sm:prose-base lg:prose-lg max-w-none">
              <p className="lead">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>

              <section id="interpretation" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Interpretation and Definitions
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-3">
                  Interpretation
                </h3>
                <p>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-3">
                  Definitions
                </h3>
                <p>For the purposes of this Privacy Policy:</p>
                <ul className="space-y-2">
                  <li>
                    <strong>Account</strong> means a unique account created for
                    You to access our Service or parts of our Service.
                  </li>
                  <li>
                    <strong>Affiliate</strong>{` means an entity that controls, is
                    controlled by or is under common control with a party, where
                    "control" means ownership of 50% or more of the shares,
                    equity interest or other securities entitled to vote for
                    election of directors or other managing authority.`}
                  </li>
                  <li>
                    <strong>Company</strong>{` (referred to as either "the
                    Company", "We", "Us" or "Our" in this Agreement) refers to
                    E-boi.`}
                  </li>
                  <li>
                    <strong>Cookies</strong> are small files that are placed on
                    Your computer, mobile device or any other device by a
                    website, containing the details of Your browsing history on
                    that website among its many uses.
                  </li>
                  <li>
                    <strong>Country</strong> refers to: Bangladesh
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the
                    Service such as a computer, a cellphone or a digital tablet.
                  </li>
                  <li>
                    <strong>Personal Data</strong> is any information that
                    relates to an identified or identifiable individual.
                  </li>
                  <li>
                    <strong>Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong>Service Provider</strong> means any natural or legal
                    person who processes the data on behalf of the Company. It
                    refers to third-party companies or individuals employed by
                    the Company to facilitate the Service, to provide the
                    Service on behalf of the Company, to perform services
                    related to the Service or to assist the Company in analyzing
                    how the Service is used.
                  </li>
                  <li>
                    <strong>Usage Data</strong> refers to data collected
                    automatically, either generated by the use of the Service or
                    from the Service infrastructure itself (for example, the
                    duration of a page visit).
                  </li>
                  <li>
                    <strong>Website</strong> refers to E-boi, accessible from
                    eboibd.com
                  </li>
                  <li>
                    <strong>You</strong> means the individual accessing or using
                    the Service, or the company, or other legal entity on behalf
                    of which such individual is accessing or using the Service,
                    as applicable.
                  </li>
                </ul>
              </section>

              <section id="collecting-data" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Collecting and Using Your Personal Data
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-3">
                  Types of Data Collected
                </h3>
                <h4 className="text-lg lg:text-xl font-medium text-purple-600 mb-2">
                  Personal Data
                </h4>
                <p>
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="space-y-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Usage Data</li>
                </ul>
                <h4 className="text-lg lg:text-xl font-medium text-purple-600 mb-2">
                  Usage Data
                </h4>
                <p>
                  Usage Data is collected automatically when using the Service.
                </p>
                <p>
              {`    Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.`}
                </p>
                <p>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </p>
                <p>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-3">
                  Tracking Technologies and Cookies
                </h3>
                <p>
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service. The technologies We use may include:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Cookies or Browser Cookies.</strong> A cookie is a
                    small file placed on Your Device. You can instruct Your
                    browser to refuse all Cookies or to indicate when a Cookie
                    is being sent. However, if You do not accept Cookies, You
                    may not be able to use some parts of our Service. Unless you
                    have adjusted Your browser setting so that it will refuse
                    Cookies, our Service may use Cookies.
                  </li>
                  <li>
                    <strong>Web Beacons.</strong> Certain sections of our
                    Service and our emails may contain small electronic files
                    known as web beacons (also referred to as clear gifs, pixel
                    tags, and single-pixel gifs) that permit the Company, for
                    example, to count users who have visited those pages or
                    opened an email and for other related website statistics
                    (for example, recording the popularity of a certain section
                    and verifying system and server integrity).
                  </li>
                </ul>
                <p>
               {`   Cookies can be "Persistent" or "Session" Cookies. Persistent
                  Cookies remain on Your personal computer or mobile device when
                  You go offline, while Session Cookies are deleted as soon as
                  You close Your web browser.`}
                </p>
                <p>
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Necessary / Essential Cookies</strong>
                    <br />
                    Type: Session Cookies
                    <br />
                    Administered by: Us
                    <br />
                    Purpose: These Cookies are essential to provide You with
                    services available through the Website and to enable You to
                    use some of its features. They help to authenticate users
                    and prevent fraudulent use of user accounts. Without these
                    Cookies, the services that You have asked for cannot be
                    provided, and We only use these Cookies to provide You with
                    those services.
                  </li>
                  <li>
                    <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                    <br />
                    Type: Persistent Cookies
                    <br />
                    Administered by: Us
                    <br />
                    Purpose: These Cookies identify if users have accepted the
                    use of cookies on the Website.
                  </li>
                  <li>
                    <strong>Functionality Cookies</strong>
                    <br />
                    Type: Persistent Cookies
                    <br />
                    Administered by: Us
                    <br />
                    Purpose: These Cookies allow us to remember choices You make
                    when You use the Website, such as remembering your login
                    details or language preference. The purpose of these Cookies
                    is to provide You with a more personal experience and to
                    avoid You having to re-enter your preferences every time You
                    use the Website.
                  </li>
                </ul>
                <p>
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of our Privacy Policy.
                </p>
              </section>

              <section id="use-of-data" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Use of Your Personal Data
                </h2>
                <p>
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="space-y-2">
                  <li>
                    To provide and maintain our Service, including to monitor
                    the usage of our Service.
                  </li>
                  <li>
                    To manage Your Account: to manage Your registration as a
                    user of the Service. The Personal Data You provide can give
                    You access to different functionalities of the Service that
                    are available to You as a registered user.
                  </li>
                  <li>
                    For the performance of a contract: the development,
                    compliance and undertaking of the purchase contract for the
                    products, items or services You have purchased or of any
                    other contract with Us through the Service.
                  </li>
                  <li>
                   {` To contact You: To contact You by email, telephone calls,
                    SMS, or other equivalent forms of electronic communication,
                    such as a mobile application's push notifications regarding
                    updates or informative communications related to the
                    functionalities, products or contracted services, including
                    the security updates, when necessary or reasonable for their
                    implementation.`}
                  </li>
                  <li>
                    To provide You with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless You have opted not to
                    receive such information.
                  </li>
                  <li>
                    To manage Your requests: To attend and manage Your requests
                    to Us.
                  </li>
                  <li>
                    For business transfers: We may use Your information to
                    evaluate or conduct a merger, divestiture, restructuring,
                    reorganization, dissolution, or other sale or transfer of
                    some or all of Our assets, whether as a going concern or as
                    part of bankruptcy, liquidation, or similar proceeding, in
                    which Personal Data held by Us about our Service users is
                    among the assets transferred.
                  </li>
                  <li>
                    For other purposes: We may use Your information for other
                    purposes, such as data analysis, identifying usage trends,
                    determining the effectiveness of our promotional campaigns
                    and to evaluate and improve our Service, products, services,
                    marketing and your experience.
                  </li>
                </ul>
                <p>
                  We may share Your personal information in the following
                  situations:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>With Service Providers:</strong> We may share Your
                    personal information with Service Providers to monitor and
                    analyze the use of our Service, to contact You.
                  </li>
                  <li>
                    <strong>For business transfers:</strong> We may share or
                    transfer Your personal information in connection with, or
                    during negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of Our
                    business to another company.
                  </li>
                  <li>
                    <strong>With Affiliates:</strong> We may share Your
                    information with Our affiliates, in which case we will
                    require those affiliates to honor this Privacy Policy.
                    Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                  </li>
                  <li>
                    <strong>With business partners:</strong> We may share Your
                    information with Our business partners to offer You certain
                    products, services or promotions.
                  </li>
                  <li>
                    <strong>With other users:</strong> when You share personal
                    information or otherwise interact in the public areas with
                    other users, such information may be viewed by all users and
                    may be publicly distributed outside.
                  </li>
                  <li>
                    <strong>With Your consent:</strong> We may disclose Your
                    personal information for any other purpose with Your
                    consent.
                  </li>
                </ul>
              </section>

              <section id="retention" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Retention of Your Personal Data
                </h2>
                <p>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if we are required to retain your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
                <p>
                  The Company will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of Our Service,
                  or We are legally obligated to retain this data for longer
                  time periods.
                </p>
              </section>

              <section id="transfer" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Transfer of Your Personal Data
                </h2>
                <p>
                {`  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ than those from Your jurisdiction. Your consent to
                  this Privacy Policy followed by Your submission of such
                  information represents Your agreement to that transfer. The
                  Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are
                  adequate controls in place including the security of Your data
                  and other personal information.`}
                </p>
              </section>

              <section id="delete" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Delete Your Personal Data
                </h2>
                <p>
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>
                <p>
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                </p>
                <p>
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any personal information that
                  You have provided to Us.
                </p>
                <p>
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
              </section>

              <section id="disclosure" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Disclosure of Your Personal Data
                </h2>
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-3">
                  Business Transactions
                </h3>
                <p>
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-3">
                  Law enforcement
                </h3>
                <p>
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </p>
                <h3 className="text-xl lg:text-2xl font-semibold text-purple-700 mb-3">
                  Other legal requirements
                </h3>
                <p>
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul className="space-y-2">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </section>

              <section id="security" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Security of Your Personal Data
                </h2>
                <p>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially acceptable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </section>

              <section id="children" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                {`  Children's Privacy`}
                </h2>
                <p>
                  Our Service does not address anyone under the age of 13. We do
                  not knowingly collect personally identifiable information from
                  anyone under the age of 13. If You are a parent or guardian
                  and You are aware that Your child has provided Us with
                  Personal Data, please contact Us. If We become aware that We
                  have collected Personal Data from anyone under the age of 13
                  without verification of parental consent, We take steps to
                  remove that information from Our servers.
                </p>
                <p>
                 {` If We need to rely on consent as a legal basis for processing
                  Your information and Your country requires consent from a
                  parent, We may require Your parent's consent before We collect
                  and use that information.`}
                </p>
              </section>

              <section id="links" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Links to Other Websites
                </h2>
                <p>
                 {` Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.`}
                </p>
                <p>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </p>
              </section>

              <section id="changes" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Changes to this Privacy Policy
                </h2>
                <p>
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p>
                 {` We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the "Last updated" date at the top of this Privacy Policy.`}
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </section>

              <section id="contact" className="mb-8 lg:mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-purple-800 mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </p>
                <ul className="space-y-2">
                  <li>By email:  hello.eboibd@gmail.com</li>
                  
                </ul>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
