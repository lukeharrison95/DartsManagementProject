package com.DM.demo;


import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;





@SpringBootApplication
public class DartsManagementApplication extends SpringBootServletInitializer{
	@Override
	   protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	      return application.sources(DartsManagementApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(DartsManagementApplication.class, args);
	}

}
