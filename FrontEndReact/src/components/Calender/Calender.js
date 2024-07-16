import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/Bootstrap-4-Calendar-No-Custom-Code.css';
import './assets/css/Bootstrap-Calendar.css';
import Sidebar from '../sidebar';
import Topbar from '../Topbar';
import Footer from '../Footer';

class Calendar extends Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
        <Sidebar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
            <Topbar />
              <div className="container-fluid">
                <h3 className="text-dark mb-1">Calendar</h3>
                <div className="calendar">
                  <div className="d-flex align-items-center">
                    <i className="far fa-calendar fa-3x me-3"></i>
                    <h1 className="month fw-bold mb-0 text-uppercase">July 2024</h1>
                  </div>
                  <p className="fst-italic text-muted mb-5">No events for this day.<br /></p>
                  <ol className="day-names list-unstyled">
                    <li className="fw-bold text-uppercase">Sunday</li>
                    <li className="fw-bold text-uppercase">Monday</li>
                    <li className="fw-bold text-uppercase">Tuesday</li>
                    <li className="fw-bold text-uppercase">Wednesday</li>
                    <li className="fw-bold text-uppercase">Thursday</li>
                    <li className="fw-bold text-uppercase">Friday</li>
                    <li className="fw-bold text-uppercase">Saturday</li>
                  </ol>
                  <ol className="days list-unstyled">
                    <li className="outside">
                      <div className="date"><span>27</span></div>
                      <div className="event bg-success"><span>Project Test</span></div>
                    </li>
                    <li className="outside">
                      <div className="date"><span>28</span></div>
                    </li>
                    <li className="outside">
                      <div className="date"><span>29</span></div>
                    </li>
                    <li className="outside">
                      <div className="date"><span>30</span></div>
                    </li>
                    <li>
                      <div className="date"><span>1</span></div>
                    </li>
                    <li>
                      <div className="date"><span>2</span></div>
                      <div className="event span-2 bg-warning"><span>Project 01</span></div>
                    </li>
                    <li>
                      <div className="date"><span>3</span></div>
                    </li>
                    <li>
                      <div className="date"><span>4</span></div>
                    </li>
                    <li>
                      <div className="date"><span>5</span></div>
                      <div className="event span-2 bg-warning" style={{ width: '628.25px', background: 'var(--bs-blue)', borderColor: 'var(--bs-blue)', '--bs-body-bg': 'var(--bs-highlight-bg)' }}>
                        <span>Project 02</span>
                      </div>
                    </li>
                    <li>
                      <div className="date"><span>6</span></div>
                    </li>
                    <li>
                      <div className="date"><span>7</span></div>
                    </li>
                    <li>
                      <div className="date"><span>8</span></div>
                    </li>
                    <li>
                      <div className="date"><span>9</span></div>
                    </li>
                    <li>
                      <div className="date"><span>10</span></div>
                    </li>
                    <li>
                      <div className="date"><span>11</span></div>
                    </li>
                    <li>
                      <div className="date"><span>12</span></div>
                    </li>
                    <li>
                      <div className="date"><span>13</span></div>
                    </li>
                    <li>
                      <div className="date"><span>14</span></div>
                    </li>
                    <li>
                      <div className="date"><span>15</span></div>
                    </li>
                    <li>
                      <div className="date"><span>16</span></div>
                    </li>
                    <li>
                      <div className="date"><span>17</span></div>
                    </li>
                    <li>
                      <div className="date"><span>18</span></div>
                    </li>
                    <li>
                      <div className="date"><span>19</span></div>
                    </li>
                    <li>
                      <div className="date"><span>20</span></div>
                    </li>
                    <li>
                      <div className="date"><span>21</span></div>
                    </li>
                    <li>
                      <div className="date"><span>22</span></div>
                    </li>
                    <li>
                      <div className="date"><span>23</span></div>
                    </li>
                    <li>
                      <div className="date"><span>24</span></div>
                    </li>
                    <li>
                      <div className="date"><span>25</span></div>
                    </li>
                    <li>
                      <div className="date"><span>26</span></div>
                    </li>
                    <li>
                      <div className="date"><span>27</span></div>
                    </li>
                    <li>
                      <div className="date"><span>28</span></div>
                    </li>
                    <li>
                      <div className="date"><span>29</span></div>
                    </li>
                    <li>
                      <div className="date"><span>30</span></div>
                    </li>
                    <li>
                      <div className="date"><span>31</span></div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <a className="border rounded d-inline scroll-to-top" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Calendar;
