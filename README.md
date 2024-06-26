# Project: Image Processing Microservice on AWS

### The Submission

URL (BeanStack): http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/

### The Checklist

* [X]  Run without errors in local mode
* [X]  Deploying the code successfully
* [X]  Pass the test after deploying

### Testing

Testing URL on local in success case: (status `200` with filtered image)

* Local URL: [Click here](http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png)
* BeanStack URL: [Click here](http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png)

Testing URL on local in failure case (don't have image_url in param): (status `400` with error message)

* Local URL: [Click here](http://localhost:8082/filteredimage?image_url=)
* BeanStack URL: [Click here](http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=)

Testing URL on local in failure case (function `filterImageFromURL` not working):
(status `400` with error message)

* Local URL: [Click here](http://localhost:8082/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg)
* BeanStack URL: [Click here](http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg)

### License

[License](LICENSE.txt)
