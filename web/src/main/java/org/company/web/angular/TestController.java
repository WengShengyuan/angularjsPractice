package org.company.web.angular;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.company.core.common.comstatic.ConfigStatic;
import org.company.core.common.comstatic.StaticValue;
import org.company.core.moduel.domain.TestTable;
import org.company.core.moduel.service.TestTableService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/test")
public class TestController {
	
	@Resource(name="TestTableServiceImpl")
	private TestTableService testTableService;
	
	@Resource(name = "ConfigStatic")
	private ConfigStatic config;
	
	@RequestMapping(value="/index")
	public ModelAndView home(HttpServletRequest request){
		
		ModelAndView view = new ModelAndView();
		view.setViewName("index");
		view.addObject("user", "AngularJs");
		return view;
	}
	
	@RequestMapping(value="/api/getUser")
	@ResponseBody
	public String getUser(HttpServletRequest request){
		
		return "AngularJs";
	}
	
	
}
