
import React from "react";
import img1 from "../images/animate.gif";

import "./Home.css";

export const Home = () => {
  let now = new Date();

  return (
    <>
      <section className="hero">
        <div className="overlay">
          <div className="container">
            <p>Today is {now.toDateString()}</p>
            <h1>SHABAN 1443 AH</h1>

            <p>
              The Hilal to commence the month of Sha'ban 1443 AH was looked for
              after the sunset of Thursday, March 3, 2022.{" "}
            </p>
            <p>
              The hilal was SIGHTED by local groups under CHC representative
              Ulama in many places throughout the East Coast.
            </p>
            <p>
              The Central Hilal Committee of Pakistan has accepted these
              report(s) and has declared:
            </p>
            <p>
              <span>
                Friday, March 4, 2022 will be the 1st day of Sha'ban 1443 AH.
              </span>
            </p>
            <div className="btn">
              <a
                href="https://hilalcommittee.org/uploads/files/CHC_Calendar_Jumadal_Akhirah_1443.pdf"
                target="_blank"
              >
                calender details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* welcome page */}

      <div className="col-welcome">
        <div className="col-1">
          <div className="col-2">
            <h1>Welcome to</h1>
            <p>the Central Hilal Commitee of Pakistan</p>
            <span>The Need for CHC</span>
            <p>
              We must establish our own system of moon sighting in Pakistan,
              with the will of Allah, if we are to live as proper Muslims in
              this great land which has provided us with so many religious
              freedoms unthinkable in many other places. We do not need to rely
              on foreign sources when we can organize proper system in
              accordance to the Quran and Sunnah in our own land....
              {/* <a href="#">Read more</a> */}
            </p>
          </div>
          <div className="col-3">
            <h2>CHC JUMADAL AKHIRAH 1443 CALENDAR</h2>
            <h1>Jumadal Akhirah 1443</h1>
            <p>
              The Hilal to commence the month of Jumadal Akhirah 1443 AH was
              looked for after the sunset of Monday, January 3, 2022. The hilal
              was SIGHTED in Houston, TX and Plano, TX by CHC representative
              Ulama by Ru'yah 'Ammah.
            </p>
            <p>
              The Central Hilal Committee of North America has accepted these
              report(s) and has declared:
            </p>
            <span>
              Tuesday, January 4, 2022 will be the 1st day of Jumadal Akhirah
              1443 AH.
            </span>
          </div>
        </div>
      </div>

      {/* objective page */}

      <div className="col-objective" id="objective">
        <div className="col-7">
          <div className="col-8">
            <h1>Objective</h1>
            <div className="col-9">
              <ol>
                <li>
                  Revive the abandoned sunnah of moon sighting every month,
                  especially for Ramadan and Eid.
                </li>
                <li>
                  Unite the Muslims of Pakistan on both Eids and Ramadan by
                  establishing a nationwide system of sighting the moon all year
                  round.
                </li>
                <li>
                  Fulfill the obligation on the entire community to sight the
                  moon (fardh kifaya) every month, nationwide.
                </li>
                <li>
                  Preserve the Hijri Calendar by establishing an effective
                  system of verified sighting
                </li>
                <li>
                  Determine the correct days of fasting, Eid, zakat year
                  calculation, iddat, death date, talaq date, al-Ayyam al-Beedh,
                  etc.
                </li>
                <li>
                  Establish a proper system of testimony of the sight reports as
                  required by the Quran and Sunnah.
                </li>
                <li>
                  Announce from a central authority composed of local
                  subcommittees with Ulama to accept the local testimonies.
                </li>
                <li>
                  Collaborate with the Ulama Kiram throughout the nation by
                  making a joint decision by consultation.
                </li>
                <li>
                  Eliminate the unnecessary differences and confusion among our
                  communities by bringing everyone together on something the
                  Quran and Sunnah mandate and NO ONE has any differences about:
                  JUST GO OUT & SIGHT THE MOON!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}

      <div className="col-img" id="article">
        <div className="col-4">
          <div className="col-5">{/* <img src={img1}></img> */}</div>
          <div className="col-6">
            <h1>Article</h1>
            <h2>SIGHTING THE MOON USING BINOCULARS AND TELESCOPES</h2>
            <p>
              “It is clear that it is not necessary (not wajib) to use
              binoculars/telescopes for moon sighting.
            </p>
            <p>
              “If it is obscured to you, complete Sha’ban as thirty (days).”
              (al-Bukhari:1909, Muslim(the wording):1081, Nasai(al-Kubra): 2439,
              Darimi: 1727)...
              <a
                className="blue-link"
                href="https://hilalcommittee.org/uploads/files/102641f9-b4d8-4f44-8557-4b909ff90976.pdf"
                target="_blank"
              >
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* About page */}

      <div className="col-10" id="about">
        <div className="col-11">
          <div className="col-12">
            <h1>about us</h1>
          </div>
          <div className="col-13">
            <p>
              As a small minority, the Muslim community in Pakistan has yet to
              establish the religious institutions required to live as proper
              Muslims. We have to defend our beliefs and practices in so many
              different ways, it is indeed overwhelming at times. Among the ways
              of distorting this Deen is removing the Sunnah of the Beloved
              Messenger of Allah, peace and blessings be upon him, from its pure
              form. The monthly moonsighting is a part of this Sunnah and
              essential to many components of our Deen like fasting, Eid, Hajj,
              zakat, divorce, etc. It is a fardh kifayah (obligatory, sufficient
              if some individuals fulfill it on behalf of all, otherwise all
              will be held accountable). To discard the monthly moonsighting
              effort would be to change the form of Deen taught by the Messenger
              of Allah, peace and blessings be upon him.
            </p>
            <p>
              We must establish our own system of moon sighting in North
              America, with the will of Allah, if we are to live as proper
              Muslims in this great land which has provided us with so many
              religious freedoms unthinkable in many other places. We do not
              need to rely on foreign sources when we can organize proper system
              in accordance to the Quran and Sunnah in our own land. We owe this
              to ourselves, in order to secure our 'ibaadah (worship), and we
              owe it to our future progeny in this land. Most importantly, we
              owe it to our Master, the Almightly, as His bound slaves.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
