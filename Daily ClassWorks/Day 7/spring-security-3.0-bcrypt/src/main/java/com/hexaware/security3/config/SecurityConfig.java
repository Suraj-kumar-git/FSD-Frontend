package com.hexaware.security3.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.hexaware.security3.filter.JwtAuthFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
	
	@Autowired
	JwtAuthFilter authFilter;

    @Bean
    //authentication
    UserDetailsService userDetailsService() {
		/*
		 * UserDetails admin = User.withUsername("Basant")
		 * .password(encoder.encode("Pwd1")) .roles("ADMIN") .build(); UserDetails user
		 * = User.withUsername("John") .password(encoder.encode("Pwd2"))
		 * .roles("USER","ADMIN","HR") .build(); return new
		 * InMemoryUserDetailsManager(admin, user);
		 */
       return new UserInfoUserDetailsService();
    }

    @Bean
    SecurityFilterChain getSecurityFilterChain(HttpSecurity http) throws Exception {
    	
    		return http.cors().and().csrf().disable()
    			.authorizeHttpRequests().requestMatchers("/products/welcome","/users/registration/new","/users/login/authenticate").permitAll()
    			.and()
    			.authorizeHttpRequests().requestMatchers("/products/**")
    			.authenticated().and()//.formLogin().and().build();
    			.sessionManagement()
    			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    			.and()
    			.authenticationProvider(myAuthenticationProvider())
    			.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
    			.build();
    	
    	
    	
    }
    
    @Bean
	 public CorsFilter corsFilter() {
       CorsConfiguration config = new CorsConfiguration();
       config.setAllowCredentials(true);
       config.addAllowedOrigin("http://localhost:4200");
       config.addAllowedHeader("*");
       config.addAllowedMethod("*");
       
       UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
       source.registerCorsConfiguration("/**", config);
       
       return new CorsFilter(source);
   }
    
    

    @Bean    
    public PasswordEncoder passwordEncoder() {          
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider myAuthenticationProvider(){
        DaoAuthenticationProvider authenticationProvider=new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }
    
    @Bean
    public AuthenticationManager authenticationProvider(AuthenticationConfiguration config) throws Exception {
    	return config.getAuthenticationManager();
    }

}
