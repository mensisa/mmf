(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{110:function(e,t,s){"use strict";s.d(t,"a",(function(){return m})),s.d(t,"b",(function(){return b}));var n=s(0),o=s.n(n);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},m=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(s),d=n,b=m["".concat(a,".").concat(d)]||m[d]||p[d]||r;return s?o.a.createElement(b,l(l({ref:t},c),{},{components:s})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,a=new Array(r);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<r;c++)a[c]=s[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,s)}d.displayName="MDXCreateElement"},98:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return a})),s.d(t,"metadata",(function(){return l})),s.d(t,"toc",(function(){return i})),s.d(t,"default",(function(){return u}));var n=s(3),o=s(8),r=(s(0),s(110)),a={id:"losses",title:"Adding a custom loss",sidebar_label:"Adding a custom loss"},l={unversionedId:"tutorials/losses",id:"tutorials/losses",isDocsHomePage:!1,title:"Adding a custom loss",description:"Custom Losses",source:"@site/docs/tutorials/losses.md",slug:"/tutorials/losses",permalink:"/docs/tutorials/losses",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/tutorials/losses.md",version:"current",lastUpdatedBy:"ryan-qiyu-jiang",lastUpdatedAt:1631715813,sidebar_label:"Adding a custom loss",sidebar:"docs",previous:{title:"Tutorial: Adding a model - Concat BERT",permalink:"/docs/tutorials/concat_bert_tutorial"},next:{title:"Image Feature Extraction",permalink:"/docs/tutorials/image_feature_extraction"}},i=[],c={toc:i};function u(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"custom-losses"},"Custom Losses"),Object(r.b)("p",null,"This is a tutorial on how to add a new loss function to MMF."),Object(r.b)("p",null,"MMF is agnostic to the kind of losses that can be added to it.\nAdding a loss requires adding a loss class and adding your new loss to your config yaml.\nFor example, the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/blob/master/website/docs/tutorials/concat_bert_tutorial.md"},"ConcatBERT")," model uses the ",Object(r.b)("inlineCode",{parentName:"p"},"cross_entropy")," loss when training on the hateful memes dataset.\nThe loss class is ",Object(r.b)("inlineCode",{parentName:"p"},"CrossEntropyLoss")," defined in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/blob/master/mmf/modules/losses.py"},"mmf/modules/losses.py"),"\nThe loss key ",Object(r.b)("inlineCode",{parentName:"p"},"cross_entropy")," is added to the list of losses in the config yaml at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/blob/15fa63071bfaed56db43deba871cfec76439c66f/projects/others/concat_bert/hateful_memes/defaults.yaml#L11"},"mmf/projects/hateful_memes/configs/concat_bert/defaults.yaml"),"."),Object(r.b)("h1",{id:"loss-class"},"Loss Class"),Object(r.b)("p",null,"Add your loss class to losses.py. It should be a subclass of ",Object(r.b)("inlineCode",{parentName:"p"},"nn.Module"),".\nLosses should implement a function forward with signature ",Object(r.b)("inlineCode",{parentName:"p"},"forward(self, sample_list, model_output)"),",\nwhere sample_list (",Object(r.b)("inlineCode",{parentName:"p"},"SampleList"),") is the current batch and model_output is a dict return by your model for current sample_list."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'@registry.register_loss("cross_entropy")\nclass CrossEntropyLoss(nn.Module):\n    def __init__(self, **params):\n        super().__init__()\n        self.loss_fn = nn.CrossEntropyLoss(**params)\n\n    def forward(self, sample_list, model_output):\n        return self.loss_fn(model_output["scores"], sample_list["targets"])\n')),Object(r.b)("h1",{id:"losses-config"},"Losses Config"),Object(r.b)("p",null,"Add the name of your new loss class to your model config.\nMultiple losses can be specified with a yaml array."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"model_config:\n  visual_bert:\n    training_head_type: classification\n    num_labels: 2\n    losses:\n    - cross_entropy\n    - soft_label_cross_entropy\n    ...\n")),Object(r.b)("p",null,"For losses with params you can do,"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"    losses:\n    - type: in_batch_hinge\n      params:\n        margin: 0.2\n        hard: true\n")),Object(r.b)("h1",{id:"multi-loss-classes"},"Multi-Loss Classes"),Object(r.b)("p",null,"If a loss class is responsible for calculating multiple losses, for example, maybe due to shared calculations you can return a dictionary of tensors.\nThe resulting loss that is optimized is the sum of all losses configured for the model.\nFor an example, take a look at the ",Object(r.b)("inlineCode",{parentName:"p"},"BCEAndKLLoss")," class in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/blob/master/mmf/modules/losses.py"},"mmf/modules/losses.py")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'@registry.register_loss("bce_kl")\nclass BCEAndKLLoss(nn.Module):\n    """binary_cross_entropy_with_logits and kl divergence loss.\n    Calculates both losses and returns a dict with string keys.\n    Similar to bce_kl_combined, but returns both losses.\n    """\n\n    def __init__(self, weight_softmax):\n        super().__init__()\n        self.weight_softmax = weight_softmax\n\n    def forward(self, sample_list, model_output):\n        pred_score = model_output["scores"]\n        target_score = sample_list["targets"]\n\n        tar_sum = torch.sum(target_score, dim=1, keepdim=True)\n        tar_sum_is_0 = torch.eq(tar_sum, 0)\n        tar_sum.masked_fill_(tar_sum_is_0, 1.0e-06)\n        tar = target_score / tar_sum\n\n        res = F.log_softmax(pred_score, dim=1)\n        loss1 = kl_div(res, tar)\n        loss1 = torch.sum(loss1) / loss1.size(0)\n\n        loss2 = F.binary_cross_entropy_with_logits(\n            pred_score, target_score, reduction="mean"\n        )\n        loss2 *= target_score.size(1)\n\n        loss = {"kl": self.weight_softmax * loss1, "bce": loss2}\n\n        return loss\n')))}u.isMDXComponent=!0}}]);