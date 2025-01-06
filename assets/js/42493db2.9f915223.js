"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[873],{9276:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"BEMAN_STANDARD","title":"The Beman Standard","description":"\x3c!--","source":"@site/docs/BEMAN_STANDARD.md","sourceDirName":".","slug":"/BEMAN_STANDARD","permalink":"/website/docs/BEMAN_STANDARD","draft":false,"unlisted":false,"editUrl":"https://github.com/RaduNichita/website/tree/master/docs/BEMAN_STANDARD.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"The Beman Library Maturity Model","permalink":"/website/docs/BEMAN_LIBRARY_MATURITY_MODEL"},"next":{"title":"Governance","permalink":"/website/docs/GOVERNANCE"}}');var t=s(4848),r=s(8453);const l={sidebar_position:2},o="The Beman Standard",c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Core principles",id:"core-principles",level:3},{value:"Changing this document",id:"changing-this-document",level:3},{value:"Conventions",id:"conventions",level:3},{value:"License",id:"license",level:2},{value:"General",id:"general",level:2},{value:"Top-level",id:"top-level",level:2},{value:"<code>README.md</code>",id:"readmemd",level:2},{value:"CMake",id:"cmake",level:2},{value:"Directory layout",id:"directory-layout",level:2},{value:"File layout",id:"file-layout",level:2},{value:"C++",id:"c",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"the-beman-standard",children:"The Beman Standard"})}),"\n",(0,t.jsx)(n.p,{children:"This document specifies rules and recommendations for Beman project libraries.\nIts goal is to create consistency facilitating the evaluation of, and\ncontribution to Beman libraries."}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.h3,{id:"core-principles",children:"Core principles"}),"\n",(0,t.jsx)(n.p,{children:"This standard is driven by four core principles:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[CORE.QUALITY] Highest quality"}),". Standards track libraries impact\ncountless engineers and, consequently, should be of the highest quality."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[CORE.PRODUCTION_READY] Production-ready"}),". Production feedback\nnecessitates reliable, well-documented software."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[CORE.INDUSTRY_STANDARD] Industry standard technology"}),". Where there's\nindustry consensus on best practices, we should take advantage. Innovation in\ntooling and style is not our purpose."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"[CORE.INCLUSIVE] Welcoming and inclusive community"}),". Broad, useful\nfeedback requires an unobstructed path for using, reviewing, and\ncontributing to Beman libraries. This principle encompasses ergonomics,\ncross-industry participation, and cultural accommodation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"changing-this-document",children:"Changing this document"}),"\n",(0,t.jsx)(n.p,{children:"This is a living document that adapts to evolving best practices and community\nneeds. To make changes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://discourse.boost.org",children:"discourse topic"})," detailing the change\nand how it aligns with the core principles."]}),"\n",(0,t.jsxs)(n.li,{children:["After some community discussion, create a PR with the actual change on\n",(0,t.jsx)(n.a,{href:"https://github.com/bemanproject/beman",children:"GitHub"})," and apply the ",(0,t.jsx)(n.em,{children:"Beman leads"})," label.\nThe PR should also link to the discourse topic."]}),"\n",(0,t.jsx)(n.li,{children:"Continue discussions on the PR and discourse topic."}),"\n",(0,t.jsx)(n.li,{children:"Await a leads a decision based on the community feedback."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note: When making minor changes such as fixing typos, correcting grammar mistakes or improving clarity, some of the previous steps may be skipped - a PR can be directly created."}),"\n",(0,t.jsx)(n.h3,{id:"conventions",children:"Conventions"}),"\n",(0,t.jsx)(n.p,{children:"This standard consists of entries that include an all-caps, dot-separated\nidentifier for referencing."}),"\n",(0,t.jsx)(n.p,{children:"With the exception of the core principles, these entries are either rules or\nrecommendations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Requirements"}),' must be followed in order to conform to this standard. These entries\nare prefixed by "REQUIREMENT:".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Recommendations"}),' should be followed in general, but specific circumstances\nmay make this a less-than-ideal choice. Libraries not following a specific\nrecommendation can still conform to this standard. These entries are prefixed\nby "RECOMMENDATION:".']}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[LICENSE.APPROVED]"})," REQUIREMENT: All Beman libraries must be licensed\nunder an approved license. These are:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://llvm.org/LICENSE.txt",children:"Apache License v2.0 with LLVM Exceptions"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.boost.org/LICENSE_1_0.txt",children:"Boost Software License 1.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://opensource.org/license/mit",children:"The MIT License"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[LICENSE.APACHE_LLVM]"})," RECOMMENDATION: All Beman libraries should be licensed\nunder the ",(0,t.jsx)(n.a,{href:"https://llvm.org/LICENSE.txt",children:"Apache License v2.0 with LLVM\nExceptions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[LICENSE.CRITERIA]"})," REQUIREMENT: All approved licenses must meet the\nfollowing requirements:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Simple to read and understand."}),"\n",(0,t.jsx)(n.li,{children:"Permission without fee to copy, use and modify the software for any\nuse (commercial and non-commercial)."}),"\n",(0,t.jsx)(n.li,{children:"Requires that the license appears on all copies of the software source code."}),"\n",(0,t.jsx)(n.li,{children:"Must not require that the license appears with executables or other binary\nuses of the library."}),"\n",(0,t.jsx)(n.li,{children:"Must not require that the source code be available for execution or other\nbinary uses of the library."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[LIBRARY.NAMES]"})," RECOMMENDATION: Beman libraries names begin with ",(0,t.jsx)(n.code,{children:"beman."}),"\nfollowed by an ",(0,t.jsx)(n.code,{children:"snake_case"})," short name."]}),"\n",(0,t.jsxs)(n.p,{children:["Examples: ",(0,t.jsx)(n.code,{children:"beman.smart_pointer"})," and ",(0,t.jsx)(n.code,{children:"beman.sender_receiver"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[REPOSITORY.NAME]"})," RECOMMENDATION: The repository should be named after the\nlibrary name excluding the ",(0,t.jsx)(n.code,{children:"beman."})," prefix."]}),"\n",(0,t.jsxs)(n.p,{children:["Examples: A ",(0,t.jsx)(n.code,{children:"beman.smart_pointer"})," library's repository should be named ",(0,t.jsx)(n.code,{children:"smart_pointer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[REPOSITORY.CODEOWNERS]"})," REQUIREMENT: There must be a ",(0,t.jsx)(n.code,{children:".github/CODEOWNERS"})," file\nwith a relevant set of codeowners."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[REPOSITORY.DISALLOW_GIT_SUBMODULES]"})," RECOMMENDATION: The repository should not use git submodules. Check ",(0,t.jsx)(n.code,{children:"CMAKE.USE_FETCH_CONTENT"})," for alternatives."]}),"\n",(0,t.jsx)(n.p,{children:"Known exceptions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/mpark/wg21",children:"mpark/wg21: Framework for Writing C++ Committee Papers"}),": A non-C++ submodule designed for drafting ISO C++ papers using LaTeX or Markdown."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"top-level",children:"Top-level"}),"\n",(0,t.jsxs)(n.p,{children:["The top-level of a Beman library repository must consist of ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"}),",\n",(0,t.jsx)(n.code,{children:"LICENSE"}),", and ",(0,t.jsx)(n.code,{children:"README.md"})," files."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[TOPLEVEL.CMAKE]"})," REQUIREMENT: There must be a ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," file at the repository's root\nthat builds and tests (via. CTest) the library."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[TOPLEVEL.LICENSE]"})," REQUIREMENT: There must be a ",(0,t.jsx)(n.code,{children:"LICENSE"})," file at the\nrepository's root with the contents of an approved license that covers the\ncontents of the repository."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[TOPLEVEL.README]"})," REQUIREMENT: There must be a markdown-formatted\n",(0,t.jsx)(n.code,{children:"README.md"})," file at the repository's root that describes the library, explains how\nto build it, and links to further documentation."]}),"\n",(0,t.jsx)(n.h2,{id:"readmemd",children:(0,t.jsx)(n.code,{children:"README.md"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[README.TITLE]"})," RECOMMENDATION: The ",(0,t.jsx)(n.code,{children:"README.md"}),' should begin with a level 1\nheader with the name of the library optionally followed with a ":" and short\ndescription.']}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"# beman.sender_receiver: Scalable Asychronous Program Building Blocks\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[README.PURPOSE]"})," RECOMMENDATION: Following the title, the ",(0,t.jsx)(n.code,{children:"README.md"})," should\ncontain a one- or two-paragraph summary describing the library's purpose."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[README.IMPLEMENTS]"})," RECOMMENDATION: Following the purpose and a newline, the\n",(0,t.jsx)(n.code,{children:"README.md"})," should indicate which papers the repository implements. Use the following style:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"**Implements**: [`std::optional<T&>` (P2988R5)](https://wg21.link/P2988R5) and\n[Give *std::optional* Range Support (P3168R1)](https://wg21.link/P3168R1).\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[README.LIBRARY_STATUS]"})," REQUIREMENT: Following the implements section and a newline, the ",(0,t.jsx)(n.code,{children:"README.md"})," must indicate the ",(0,t.jsx)(n.a,{href:"https://github.com/bemanproject/beman/blob/main/docs/BEMAN_LIBRARY_MATURITY_MODEL.md",children:"Beman library maturity model"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Use the following style:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"**Status**: [Production ready. API may undergo changes.](https://github.com/bemanproject/beman/blob/main/docs/BEMAN_LIBRARY_MATURITY_MODEL.md#production-ready-api-may-undergo-changes)\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"**Status**: [Production ready. Stable API.](https://github.com/bemanproject/beman/blob/main/docs/BEMAN_LIBRARY_MATURITY_MODEL.md#production-ready-stable-api)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cmake",children:"CMake"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.DEFAULT]"})," RECOMMENDATION: The root ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," should build all targets by default (including dependency targets)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.USE_FETCH_CONTENT]"})," RECOMMENDATION: The root ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," should fetch all dependency targets via ",(0,t.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/module/FetchContent.html",children:"CMake FetchContent"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Use the following style:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:"FetchContent_Declare(\n    <dependency name>\n    EXCLUDE_FROM_ALL\n    GIT_REPOSITORY ${GIT_REPOSITORY}\n    GIT_TAG ${GIT_TAG}\n)\nFetchContent_MakeAvailable(<dependency name>)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check ",(0,t.jsx)(n.code,{children:"[CMAKE.SKIP_TESTS]"})," in this document for a working example or ",(0,t.jsx)(n.a,{href:"https://github.com/bemanproject/exemplar/blob/main/CMakeLists.txt",children:"exemplar/blob/main/CMakeLists.txt"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.PROJECT_NAME]"})," RECOMMENDATION: The CMake project name should be\nidentical to the beman library name."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.LIBRARY_NAME]"})," RECOMMENDATION: The CMake library target's name should\nbe identical to the library name."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:"add_library(beman.smart_pointer STATIC)\n#...\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.LIBRARY_ALIAS]"})," REQUIREMENT: The CMake code must create an alias of\nthe library target named ",(0,t.jsx)(n.code,{children:"beman::<short_name>"}),". This target is intended for\nexternal use."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:"add_library(beman::smart_pointer ALIAS beman.smart_pointer)\n#...\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.TARGET_NAMES]"})," RECOMMENDATION: All targets, aside from the library\ntarget, should begin with a ",(0,t.jsx)(n.code,{children:"<library_name>."})," prefix"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:"add_executable(beman.smart_pointer.examples.basic)\n#...\nadd_executable(beman.smart_pointer.tests.roundtrip)\n#...\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.CONFIG]"})," REQUIREMENT: At ",(0,t.jsx)(n.code,{children:"install"})," time, a\n",(0,t.jsx)(n.code,{children:"<library_name>Config.cmake"})," must be created which exports a\n",(0,t.jsx)(n.code,{children:"beman::<short_name>"})," target."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.SKIP_TESTS]"})," RECOMMENDATION: The root ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," should not build tests and their dependencies when ",(0,t.jsx)(n.code,{children:"BEMAN_<short_name>_BUILD_TESTS"})," is set to ",(0,t.jsx)(n.code,{children:"OFF"})," (see ",(0,t.jsx)(n.a,{href:"https://cmake.org/cmake/help/latest/module/CTest.html",children:"CTest docs"})," - similar to cmake's ",(0,t.jsx)(n.code,{children:"BUILD_TESTING"}),"). The option is prefixed with the project so that projects can compose. Turning on testing for the top level project should not turn on testing for dependencies. Since testing is part of the normal development workflow it is appropriate to set the option on by default for the top level project."]}),"\n",(0,t.jsx)(n.p,{children:"Use the following style:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:'# <repo>/CMakeLists.txt\n# ...\noption(\n    BEMAN_<short_name>_BUILD_TESTS\n    "Enable building tests and test infrastructure. Default: ON. Values: { ON, OFF }."\n    ${PROJECT_IS_TOP_LEVEL}\n)\n\nif(BEMAN_<short_name>_BUILD_TESTS)\n  FetchContent_Declare(\n    googletest\n    EXCLUDE_FROM_ALL\n    GIT_REPOSITORY https://github.com/google/googletest.git\n    GIT_TAG e39786088138f2749d64e9e90e0f9902daa77c40 # release-1.15.0\n  )\n  FetchContent_MakeAvailable(googletest)\nendif()\n\n# ...\nif(BEMAN_<short_name>_BUILD_TESTS)\n  add_subdirectory(tests)\nendif()\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.SKIP_EXAMPLES]"})," RECOMMENDATION: The root ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," should not build examples and their dependencies when ",(0,t.jsx)(n.code,{children:"BEMAN_<short_name>_BUILD_EXAMPLES"})," is set to ",(0,t.jsx)(n.code,{children:"OFF"}),". The option is prefixed with the project so that projects can compose. Turning on examples for the top level project should not turn on examples for dependencies."]}),"\n",(0,t.jsx)(n.p,{children:"Use the following style:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:'# <repo>/CMakeLists.txt\n# ...\noption(\n    BEMAN_<short_name>_BUILD_EXAMPLES\n    "Enable building examples. Default: ON. Values: { ON, OFF }."\n    ${PROJECT_IS_TOP_LEVEL}\n)\n\n# add actual code to be build here\n...\n\n# ...\nif(BEMAN_<short_name>_BUILD_EXAMPLES)\n  add_subdirectory(examples)\nendif()\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CMAKE.AVOID_PASSTHROUGHS]"})," RECOMMENDATION: Avoid ",(0,t.jsx)(n.code,{children:"CMakeLists.txt"})," files\nconsisting of a single ",(0,t.jsx)(n.code,{children:"add_subdirectory"})," call."]}),"\n",(0,t.jsx)(n.p,{children:"In other words prefer,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:"# <repo>/CMakeLists.txt\n# ...\nadd_subdirectory(src/beman/optional26)\n"})}),"\n",(0,t.jsx)(n.p,{children:"to,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:"# <repo>/CMakeLists.txt\n# ...\nadd_subdirectory(src) # Don't do this\n\n# <repo>/src/CMakeLists.txt\nadd_subdirectory(beman) # Don't do this\n\n# <repo>/src/beman/CMakeLists.txt\nadd_subdirectory(optional26) # Don't do this\n"})}),"\n",(0,t.jsx)(n.h2,{id:"directory-layout",children:"Directory layout"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[DIRECTORY.INTERFACE_HEADERS]"})," REQUIREMENT: Header files that are part of the\npublic interface must reside within the ",(0,t.jsx)(n.code,{children:"include/beman/<short_name>/"})," directory."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"include\n\u2514\u2500\u2500 beman\n    \u2514\u2500\u2500 exemplar\n        \u2514\u2500\u2500 identity.hpp\n        \u2514\u2500\u2500 ...\n        \u2514\u2500\u2500 ...\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[DIRECTORY.IMPLEMENTATION_HEADERS]"})," REQUIREMENT: Header files residing within\n",(0,t.jsx)(n.code,{children:"include/beman/<short_name>/"})," that are not part of the public interface\nmust either begin with ",(0,t.jsx)(n.code,{children:"detail_"})," or reside within a subdirectory of\n",(0,t.jsx)(n.code,{children:"include/beman/<short_name>/"})," called ",(0,t.jsx)(n.code,{children:"detail"})," or begins with ",(0,t.jsx)(n.code,{children:"detail_"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"include\n\u2514\u2500\u2500 beman\n    \u2514\u2500\u2500 optional26\n        \u251c\u2500\u2500 detail                           # Private implementation subdirectory.\n        \u2502   \u251c\u2500\u2500 iterator.hpp\n        \u2502   \u2514\u2500\u2500 stl_interfaces\n        \u2502       \u251c\u2500\u2500 config.hpp\n        \u2502       \u251c\u2500\u2500 fwd.hpp\n        \u2502       \u2514\u2500\u2500 iterator_interface.hpp\n        \u2514\u2500\u2500 optional.hpp                     # Public interface.\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[DIRECTORY.SOURCES]"})," RECOMMENDATION: Sources and headers not part of the\npublic interface should reside in the top-level ",(0,t.jsx)(n.code,{children:"src/"})," directory, and should use\nthe same structure from ",(0,t.jsx)(n.code,{children:"include/"})," - e.g., ",(0,t.jsx)(n.code,{children:"src/beman/<short_name>/"}),". Check ",(0,t.jsx)(n.code,{children:"CMAKE.AVOID_PASSTHROUGHS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"src\n\u2514\u2500\u2500 beman\n    \u2514\u2500\u2500 exemplar\n        \u251c\u2500\u2500 CMakeLists.txt\n        \u2514\u2500\u2500 identity.cpp\n\nsrc\n\u2514\u2500\u2500 beman\n    \u2514\u2500\u2500 optional26\n        \u251c\u2500\u2500 CMakeLists.txt\n        \u251c\u2500\u2500 detail\n        \u2502   \u2514\u2500\u2500 iterator.cpp\n        \u2514\u2500\u2500 optional.cpp\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[DIRECTORY.TESTS]"})," REQUIREMENT: All test files must reside within the top-level ",(0,t.jsx)(n.code,{children:"tests/"}),"\ndirectory, and should use the same structure from ",(0,t.jsx)(n.code,{children:"include/"}),". If multiple test types are present,\nsubdirectories can be made (e.g., unit tests, performance etc)."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"tests\n\u2514\u2500\u2500 beman\n    \u2514\u2500\u2500 exemplar\n        \u2514\u2500\u2500 identity.test.cpp\n\ntests\n\u2514\u2500\u2500 beman\n    \u2514\u2500\u2500 optional26\n        \u251c\u2500\u2500 CMakeLists.txt\n        \u251c\u2500\u2500 detail\n        \u2502   \u2514\u2500\u2500 iterator.test.cpp\n        \u251c\u2500\u2500 optional.test.cpp\n        \u251c\u2500\u2500 optional_constexpr.test.cpp\n        \u251c\u2500\u2500 optional_monadic.test.cpp\n        \u251c\u2500\u2500 optional_range_support.test.cpp\n        \u251c\u2500\u2500 test_types.cpp\n        \u251c\u2500\u2500 test_types.hpp\n        \u251c\u2500\u2500 test_utilities.cpp\n        \u2514\u2500\u2500 test_utilities.hpp\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[DIRECTORY.EXAMPLES]"})," REQUIREMENT: If present, all example files must reside within the top-level ",(0,t.jsx)(n.code,{children:"examples/"}),"\ndirectory. Each project must have at least one relevant example."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"examples\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 identity_as_default_projection.cpp\n\u2514\u2500\u2500 identity_direct_usage.cpp\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[DIRECTORY.DOCS]"})," REQUIREMENT: If present, all documentation files, except the root ",(0,t.jsx)(n.code,{children:"README.md"}),", must reside within the top-level ",(0,t.jsx)(n.code,{children:"docs/"})," directory. If multiple docs types are present, subdirectories can be made (e.g., dev, public/private etc)."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docs\n\u251c\u2500\u2500 debug\n\u2502   \u2514\u2500\u2500 ci.md\n\u251c\u2500\u2500 dev\n\u2502   \u2514\u2500\u2500 lint.md\n\u251c\u2500\u2500 local.md\n\u2514\u2500\u2500 optional26.md\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[DIRECTORY.PAPERS]"})," REQUIREMENT: If present, all paper related files (e.g., WIP LaTeX/Markdown projects for ISO Standardization), must reside within the top-level ",(0,t.jsx)(n.code,{children:"papers/"})," directory."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"papers\n\u2514\u2500\u2500 P2988\n    \u251c\u2500\u2500 Makefile\n    \u251c\u2500\u2500 README.md\n    \u251c\u2500\u2500 abstract.bst\n    ...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"file-layout",children:"File layout"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[FILE.NAMES]"})," RECOMMENDATION: Source code and header should use the ",(0,t.jsx)(n.code,{children:"snake_case"})," naming convention (similar to ",(0,t.jsx)(n.code,{children:"LIBRARY.NAMES"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Examples: ",(0,t.jsx)(n.code,{children:"identity.hpp"}),", ",(0,t.jsx)(n.code,{children:"identity.cpp"}),", ",(0,t.jsx)(n.code,{children:"iterator_interface.hpp"})," or ",(0,t.jsx)(n.code,{children:"optional_range_support.test.cpp"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[FILE.TEST_NAMES]"})," REQUIREMENT: Test source code files must use the ",(0,t.jsx)(n.code,{children:"*.test.cpp"})," naming convention."]}),"\n",(0,t.jsxs)(n.p,{children:["Examples: ",(0,t.jsx)(n.code,{children:"identity.test.cpp"}),", ",(0,t.jsx)(n.code,{children:"optional_ref.test.cpp"})," or ",(0,t.jsx)(n.code,{children:"optional_range_support.test.cpp"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[FILE.LICENSE_ID]"})," REQUIREMENT: The ",(0,t.jsx)(n.a,{href:"https://spdx.dev/learn/handling-license-info/",children:"SPDX license\nidentifier"})," must be added at the\nfirst possible line in all files which can contain a comment\n(e.g., C++, scripts, CMake/Makefile, YAML/YML, JASON, XML, HTML, LaTeX, Dockerfile etc)."]}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"C++ files shall use the following form:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-C++",children:"// SPDX-License-Identifier: <SPDX License Expression>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CMake files and scripts shall use the following form:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CMake",children:"# SPDX-License-Identifier: <SPDX License Expression>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Markdown files will use a comment following the title:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"# Title\n\n\x3c!--\nSPDX-License-Identifier: <SPDX License Expression>\n--\x3e\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[FILE.COPYRIGHT]"})," RECOMMENDATION: Source code files should NOT include a\ncopyright notice following the SPDX license identifier."]}),"\n",(0,t.jsx)(n.h2,{id:"c",children:"C++"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[CPP.NAMESPACE]"})," RECOMMENDATION: Headers in ",(0,t.jsx)(n.code,{children:"include/beman/<short_name>/"})," should export\nentities in the ",(0,t.jsx)(n.code,{children:"beman::<short_name>"})," namespace."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);