(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,h=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(110)),o={id:"image_feature_extraction",title:"Image Feature Extraction",sidebar_label:"Image Feature Extraction"},c={unversionedId:"tutorials/image_feature_extraction",id:"tutorials/image_feature_extraction",isDocsHomePage:!1,title:"Image Feature Extraction",description:"In this tutorial, we will go through the step-by-step process of generating image features with FasterRCNN feature extractors. MMF provides utility scripts for running image feature extractions using different models (Faster RCNN with X-101 backbones and X-152 backbones). For example: tools/scripts/features/extractfeaturesvmb.py. The script allows you to optionally parallelize the feature extraction execution.",source:"@site/docs/tutorials/image_feature_extraction.md",slug:"/tutorials/image_feature_extraction",permalink:"/docs/tutorials/image_feature_extraction",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/tutorials/image_feature_extraction.md",version:"current",lastUpdatedBy:"Sasha Sheng",lastUpdatedAt:1607388065,sidebar_label:"Image Feature Extraction",sidebar:"docs",previous:{title:"Adding a custom loss",permalink:"/docs/tutorials/losses"},next:{title:"Tutorial: Understanding Checkpointing for Pretraining and Finetuning",permalink:"/docs/tutorials/checkpointing"}},s=[{value:"Prerequisites: setup",id:"prerequisites-setup",children:[]},{value:"Install vqa-maskrcnn-benchmark",id:"install-vqa-maskrcnn-benchmark",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Step-by-step installation",id:"step-by-step-installation",children:[]}]},{value:"Feature Extractors",id:"feature-extractors",children:[]},{value:"Extract Image Features",id:"extract-image-features",children:[]},{value:"Extract Image Features with cluster workload manager (e.g., Slurm)",id:"extract-image-features-with-cluster-workload-manager-eg-slurm",children:[{value:"Separate the images into 2 set",id:"separate-the-images-into-2-set",children:[]}]}],l={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this tutorial, we will go through the step-by-step process of generating image features with FasterRCNN feature extractors. MMF provides utility scripts for running image feature extractions using different models (Faster RCNN with X-101 backbones and X-152 backbones). For example: ",Object(i.b)("inlineCode",{parentName:"p"},"tools/scripts/features/extract_features_vmb.py"),". The script allows you to optionally parallelize the feature extraction execution."),Object(i.b)("p",null,"Here are the steps in a nut shell:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Prerequisites: setup"),Object(i.b)("li",{parentName:"ul"},"Install vqa-maskrcnn-benchmark"),Object(i.b)("li",{parentName:"ul"},"Download the dataset (not covered in this tutorial)"),Object(i.b)("li",{parentName:"ul"},"Identify which vision feature extractor you'd like to use"),Object(i.b)("li",{parentName:"ul"},"Extract image features"),Object(i.b)("li",{parentName:"ul"},"Extract image features with slurm")),Object(i.b)("h2",{id:"prerequisites-setup"},"Prerequisites: setup"),Object(i.b)("p",null,"Create a new conda environment for feature extraction repo installation:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"conda create -n maskrcnn_benchmark\nconda activate maskrcnn_benchmark\n")),Object(i.b)("p",null,"A new conda environment is created so that the installation does not mess with the mmf conda environment."),Object(i.b)("p",null,"Follow ",Object(i.b)("a",{parentName:"p",href:"https://www.internalfb.com/intern/staticdocs/mmf/docs/getting_started/installation#install-from-source-recommended"},"this")," to install mmf in this new conda environment: maskrcnn_benchmark"),Object(i.b)("h2",{id:"install-vqa-maskrcnn-benchmark"},"Install vqa-maskrcnn-benchmark"),Object(i.b)("p",null,"The following instructions is to install the maskrcnn-benchmark repo from ",Object(i.b)("a",{parentName:"p",href:"https://gitlab.com/vedanuj/vqa-maskrcnn-benchmark"},"here"),"."),Object(i.b)("h3",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PyTorch >1.0 from a nightly release. Installation instructions can be found in ",Object(i.b)("a",{parentName:"li",href:"https://pytorch.org/get-started/locally/"},"this")),Object(i.b)("li",{parentName:"ul"},"torchvision from master"),Object(i.b)("li",{parentName:"ul"},"cocoapi"),Object(i.b)("li",{parentName:"ul"},"yacs"),Object(i.b)("li",{parentName:"ul"},"matplotlib"),Object(i.b)("li",{parentName:"ul"},"GCC >= 4.9"),Object(i.b)("li",{parentName:"ul"},"(optional) OpenCV for the webcam demo")),Object(i.b)("h3",{id:"step-by-step-installation"},"Step-by-step installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# first, make sure that your conda is setup properly with the right environment\n# for that, check that `which conda`, `which pip` and `which python` points to the\n# right path. From a clean conda env, this is what you need to do\n\n# this installs the right pip and dependencies for the fresh python\nconda install ipython\n\n# maskrcnn_benchmark and coco api dependencies\npip install ninja yacs cython matplotlib\n\n# follow PyTorch installation in https://pytorch.org/get-started/locally/\nconda install pytorch-nightly -c pytorch\n\n# install torchvision\ncd ~/github\ngit clone https://github.com/pytorch/vision.git\ncd vision\npython setup.py install\n\n# install pycocotools\ncd ~/github\ngit clone https://github.com/cocodataset/cocoapi.git\ncd cocoapi/PythonAPI\npython setup.py build_ext install\n\n# install PyTorch Detection\ncd ~/github\ngit clone https://gitlab.com/vedanuj/vqa-maskrcnn-benchmark.git\ncd vqa-maskrcnn-benchmark\n\n# the following will install the lib with\n# symbolic links, so that you can modify\n# the files if you want and won't need to\n# re-build it\npython setup.py build develop\n\n# or if you are on macOS\n# MACOSX_DEPLOYMENT_TARGET=10.9 CC=clang CXX=clang++ python setup.py build develop\n")),Object(i.b)("h2",{id:"feature-extractors"},"Feature Extractors"),Object(i.b)("p",null,"We provide the model weights of two feature extractors based on ",Object(i.b)("a",{parentName:"p",href:"https://arxiv.org/pdf/1506.01497.pdf"},"FasterRCNN"),": Resnet101 and Resnet152. They are pretrained on ",Object(i.b)("a",{parentName:"p",href:"https://arxiv.org/abs/1602.07332"},"VisualGenome"),". In this tutorial, we use the FasterRCNN-ResNet101 feature extractor."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"To use a different feature extractor, you can override the ",Object(i.b)("inlineCode",{parentName:"p"},"model_file")," param to point at the feature extractor model file."))),Object(i.b)("h2",{id:"extract-image-features"},"Extract Image Features"),Object(i.b)("p",null,"Images in ",Object(i.b)("inlineCode",{parentName:"p"},"<FOLDER_PATH_TO_DATASET>")," that have PNG/JPG/JPEG extensions will have their features extracted with the following invocation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python mmf/mmf/tools/scripts/features/extract_features_vmb.py --model_name=X-152 --image_dir=<FOLDER_PATH_TO_DATASET> --output_folder=<OUTPUT_FOLDER>\n")),Object(i.b)("h2",{id:"extract-image-features-with-cluster-workload-manager-eg-slurm"},"Extract Image Features with cluster workload manager (e.g., Slurm)"),Object(i.b)("p",null,"We can utilize slurms based cluster workload manager to do image feature extraction in parallel on multiple machines. This can greatly speed up the processing time if you have lots of images that need to have their features extracted. Please refer to ",Object(i.b)("inlineCode",{parentName:"p"},"mmf/mmf/tools/scripts/features/extract_features_vmb.py")," to see how you can adapt it to work for your purpose. As an example here, I showcase how to run image feature extraction on Flickr test set on 2 machines."),Object(i.b)("h3",{id:"separate-the-images-into-2-set"},"Separate the images into 2 set"),Object(i.b)("p",null,"Create a ",Object(i.b)("inlineCode",{parentName:"p"},"<IMAGE_LISTS_FOLDER>")," folder that contains 2 files, each of the file contains a list of full image paths with newline as delimiter."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nfor image_list in $(ls <IMAGE_LISTS_FOLDER>)\ndo\n    sbatch --mem 128GB --nodes=1 --gres=gpu:1 --partition=<your_partition> --time=3000 --cpus-per-task=8 \\\n    flickr_test_extract_image_feature.sh $image_list\ndone\n")),Object(i.b)("p",null,"Separately, in ",Object(i.b)("inlineCode",{parentName:"p"},"flickr_test_extract_image_feature.sh")," write the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"\n#!/bin/bash\npython tools/scripts/features/extract_features_vmb.py \\\n    --image_dir $1 \\\n    --output_folder /checkpoint/ronghanghu/misc/open_images_vmb_feat/train \\\n    --model_file data/vmb_feat_extraction/detectron_model.pth \\\n    --config_file data/vmb_feat_extraction/detectron_model.yaml\n")))}p.isMDXComponent=!0}}]);