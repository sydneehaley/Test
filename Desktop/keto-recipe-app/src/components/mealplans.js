import React, { Component } from 'react';
import axios from 'axios';

import { Formik } from 'formik';
import * as yup from 'yup';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormRow from 'react-bootstrap/FormText';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

class Mealplan extends Component {
  state = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
    error: null,
  };

  generateMealPlan = async (e) => {
    e.preventDefault();

    // const mealplanTime = e.target.elements.mealplantime.value;
    const mealplanCalories = e.target.elements.mealplancalories.value;
    const mealplanAllergies = e.target.elements.mealplanallergies.value;

    const mealplansUrl = `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=245c1de7e3dd44bcaad22cb705677483&diet=keto&targetCalories=${mealplanCalories}&exclude=${mealplanAllergies}`;

    const request = await fetch(mealplansUrl);
    const res = await request.json();
    this.setState({
      monday: res.week.monday.meals,
      tuesday: res.week.tuesday.meals,
      wednesday: res.week.wednesday.meals,
      thursday: res.week.thursday.meals,
      friday: res.week.friday.meals,
      saturday: res.week.saturday.meals,
      sunday: res.week.sunday.meals,
      error: null,
    });
    console.log(this.state.mealplans);
    console.log(this.state.monday);

    // if (!mealplanTime) {
    //   this.setState({ error: 'Please enter a value' });
    // } else {
    //   this.setState({ mealplans: res.meals, error: null });
    // }

    if (!mealplanCalories) {
      this.setState({ error: 'Please enter a value' });
    } else {
      this.setState({
        monday: res.week.monday.meals,
        tuesday: res.week.tuesday.meals,
        wednesday: res.week.wednesday.meals,
        thursday: res.week.thursday.meals,
        friday: res.week.friday.meals,
        saturday: res.week.saturday.meals,
        sunday: res.week.sunday.meals,
        error: null,
      });
    }

    if (!mealplanAllergies) {
      this.setState({ error: 'Please enter a value' });
    } else {
      this.setState({
        mealplans: res.meals,
        monday: res.week.monday.meals,
        tuesday: res.week.tuesday.meals,
        wednesday: res.week.wednesday.meals,
        thursday: res.week.thursday.meals,
        friday: res.week.friday.meals,
        saturday: res.week.saturday.meals,
        sunday: res.week.sunday.meals,
        error: null,
      });
    }
  };

  componentDidMount() {
    return this.generateMealPlan;
  }

  render() {
    return (
      <div>
        <MealplanSearch mealplanSearch={this.generateMealPlan} />
        {this.state.error !== null ? (
          <span>
            <h4>{this.state.error}</h4>
          </span>
        ) : (
          <div>
            <MealplansIntroSection monday={this.state.monday} />
            <MealplansMonSection monday={this.state.monday} />
            <MealplansTuesSection tuesday={this.state.tuesday} />
            <MealplansWedSection wednesday={this.state.wednesday} />
            <MealplansThursSection thursday={this.state.thursday} />
            <MealplansFriSection friday={this.state.friday} />
            <MealplansSatSection saturday={this.state.saturday} />
            <MealplansSunSection sunday={this.state.sunday} />
          </div>
        )}
      </div>
    );
  }
}

const MealplanSearch = ({ mealplanSearch }) => {
  return (
    <div className='col-lg-12 mx-lg-auto mt-lg-3'>
      <Row className='justify-content-md-center mealplan__intro--weekly mx-lg-auto mb-lg-5 mt-lg-5'>
        <h1 className='mb-lg-3'>Generate A Mealplan</h1>
        <p>
          {' '}
          Est consequat id adipisicing qui occaecat do. Deserunt excepteur dolor
          nisi incididunt enim minim est deserunt. Non minim exercitation Lorem
          deserunt do dolor dolore enim in voluptate deserunt nostrud. Velit
          voluptate deserunt officia est minim deserunt deserunt quis quis
          incididunt officia. Sunt laborum sit pariatur do laborum fugiat
          pariatur ex Lorem proident ut eu cillum sit. Consequat eu minim veniam
          pariatur minim deserunt do voluptate commodo laboris nostrud ut
          officia elit.
        </p>
      </Row>
      <Row style={{ width: '80%', margin: '.5rem auto' }}>
        <h4>Get A Weekly Meal Plan</h4>
      </Row>

      <Row className='mealplan__intro--weekly--form  mx-lg-auto'>
        <Form onSubmit={mealplanSearch}>
          <Form.Row className='mb-lg-3'>
            {/* <Form.Group className='mr-lg-3' controlId='formGridState'>
              <Form.Label>Day or Week</Form.Label>
              <Form.Control
                as='select'
                name='mealplantime'
                defaultValue='Choose...'
                className='form-control-lg'>
                <option value='0'>Choose...</option>
                <option value='day'> Mealplan for A Day</option>
                <option value='week'> Mealplan for A Week</option>
              </Form.Control>
            </Form.Group> */}
            <Col>
              <Form.Group className='mr-lg-3' controlId='formBasicEmail'>
                {/* <Form.Label>Max Calories</Form.Label> */}
                <Form.Control
                  type='text'
                  name='mealplancalories'
                  placeholder='Weekly Calorie Count'
                  className='form-control-lg'
                />
                <Form.Text className='text-muted'>
                  Enter your total allowed calories for the day or week.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mr-lg-3' controlId='formBasicEmail'>
                {/* <Form.Label>Allergies and Exclusions</Form.Label> */}
                <Form.Control
                  type='text'
                  name='mealplanallergies'
                  placeholder='i.e shellfish, fish, eggs'
                  className='form-control-lg'
                />
                <Form.Text className='text-muted'>
                  If you have any allergies or ingredients, enter them here.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <ButtonGroup className='px-lg-0'>
                <Button
                  variant='primary'
                  size='lg'
                  className='mx-lg-0'
                  type='submit'>
                  Get A Mealplan
                </Button>
              </ButtonGroup>
            </Col>
          </Form.Row>
        </Form>
      </Row>
    </div>
  );
};

const MealplansIntroSection = ({ monday }) => {
  const title = monday.slice(1, 2);
  return (
    <div>
      {title.map(({ title }) => {
        return (
          <div>
            <h1>Your Weekly Mealplan</h1>
          </div>
        );
      })}
    </div>
  );
};

const MealplansMonSection = ({ monday }) => {
  const title = monday.slice(0, 1);
  const breakfast = monday.slice(0, 1);
  const lunch = monday.slice(1, 2);
  const dinner = monday.slice(2, 3);
  return (
    <div className='mealplans__day'>
      {title.map(({ id, imageType, title, sourceUrl }) => {
        return (
          <div className='mealplans__day--recipe--daylabel'>
            <h1>Monday</h1>
          </div>
        );
      })}
      {breakfast.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Breakfast</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {lunch.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Lunch</h4>

            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {dinner.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Dinner</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const MealplansTuesSection = ({ tuesday }) => {
  const title = tuesday.slice(0, 1);
  const breakfast = tuesday.slice(0, 1);
  const lunch = tuesday.slice(1, 2);
  const dinner = tuesday.slice(2, 3);
  return (
    <div className='mealplans__day'>
      {title.map(({ id, imageType, title, sourceUrl }) => {
        return (
          <div className='mealplans__day--recipe--daylabel'>
            <h1>Tuesday</h1>
          </div>
        );
      })}
      {breakfast.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Breakfast</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {lunch.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Lunch</h4>

            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {dinner.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Dinner</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const MealplansWedSection = ({ wednesday }) => {
  const title = wednesday.slice(0, 1);
  const breakfast = wednesday.slice(0, 1);
  const lunch = wednesday.slice(1, 2);
  const dinner = wednesday.slice(2, 3);
  return (
    <div className='mealplans__day'>
      {title.map(({ id, imageType, title, sourceUrl }) => {
        return (
          <div className='mealplans__day--recipe--daylabel'>
            <h1>Wednesday</h1>
          </div>
        );
      })}
      {breakfast.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Breakfast</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {lunch.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Lunch</h4>

            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {dinner.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Dinner</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const MealplansThursSection = ({ thursday }) => {
  const title = thursday.slice(0, 1);
  const breakfast = thursday.slice(0, 1);
  const lunch = thursday.slice(1, 2);
  const dinner = thursday.slice(2, 3);
  return (
    <div className='mealplans__day'>
      {title.map(({ id, imageType, title, sourceUrl }) => {
        return (
          <div className='mealplans__day--recipe--daylabel'>
            <h1>Thursday</h1>
          </div>
        );
      })}
      {breakfast.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Thursday</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {lunch.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Thursday</h4>

            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {dinner.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Dinner</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
const MealplansFriSection = ({ friday }) => {
  const title = friday.slice(0, 1);
  const breakfast = friday.slice(0, 1);
  const lunch = friday.slice(1, 2);
  const dinner = friday.slice(2, 3);
  return (
    <div className='mealplans__day'>
      {title.map(({ id, imageType, title, sourceUrl }) => {
        return (
          <div className='mealplans__day--recipe--daylabel'>
            <h1>Friday</h1>
          </div>
        );
      })}
      {breakfast.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Breakfast</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {lunch.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Lunch</h4>

            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {dinner.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Dinner</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const MealplansSatSection = ({ saturday }) => {
  const title = saturday.slice(0, 1);
  const breakfast = saturday.slice(0, 1);
  const lunch = saturday.slice(1, 2);
  const dinner = saturday.slice(2, 3);
  return (
    <div className='mealplans__day'>
      {title.map(({ id, imageType, title, sourceUrl }) => {
        return (
          <div className='mealplans__day--recipe--daylabel'>
            <h1>Saturday</h1>
          </div>
        );
      })}
      {breakfast.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Breakfast</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {lunch.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Lunch</h4>

            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {dinner.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Dinner</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const MealplansSunSection = ({ sunday }) => {
  const title = sunday.slice(0, 1);
  const breakfast = sunday.slice(0, 1);
  const lunch = sunday.slice(1, 2);
  const dinner = sunday.slice(2, 3);
  return (
    <div className='mealplans__day'>
      {title.map(({ id, imageType, title, sourceUrl }) => {
        return (
          <div className='mealplans__day--recipe--daylabel'>
            <h1>sunday</h1>
          </div>
        );
      })}
      {breakfast.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Breakfast</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {lunch.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Lunch</h4>

            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {dinner.map(({ id, imageType, title, sourceUrl }) => {
        console.log(title);
        return (
          <div className='mealplans__day--recipe'>
            <h4>Dinner</h4>
            <Card border='dark'>
              <Card.Img
                variant='top'
                src={`https://spoonacular.com/recipeImages/${id}-480x360.${imageType}`}
                className='mealplans__recipecard'
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant='primary'>Get Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Mealplan;
