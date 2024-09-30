/*
package com.nnangedev.nnangehotel.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;

@Configuration
public class WebSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf((csrf) -> csrf.disable()).cors((cors) -> cors.disable());
        http.authorizeHttpRequests((authorizeHttpRequests) ->
                authorizeHttpRequests
                        // Specific exclusions or rules.
                        .requestMatchers("/rooms/**").permitAll()
                        // Everything else should be authenticated
                        .anyRequest().authenticated());
        return http.build();
    }
}
*/
