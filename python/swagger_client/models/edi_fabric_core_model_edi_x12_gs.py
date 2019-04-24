# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class EdiFabricCoreModelEdiX12GS(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'code_identifying_information_type_1': 'str',
        'sender_id_code_2': 'str',
        'receiver_id_code_3': 'str',
        'date_4': 'str',
        'time_5': 'str',
        'group_control_number_6': 'str',
        'transaction_type_code_7': 'str',
        'version_and_release_8': 'str'
    }

    attribute_map = {
        'code_identifying_information_type_1': 'codeIdentifyingInformationType_1',
        'sender_id_code_2': 'senderIDCode_2',
        'receiver_id_code_3': 'receiverIDCode_3',
        'date_4': 'date_4',
        'time_5': 'time_5',
        'group_control_number_6': 'groupControlNumber_6',
        'transaction_type_code_7': 'transactionTypeCode_7',
        'version_and_release_8': 'versionAndRelease_8'
    }

    def __init__(self, code_identifying_information_type_1=None, sender_id_code_2=None, receiver_id_code_3=None, date_4=None, time_5=None, group_control_number_6=None, transaction_type_code_7=None, version_and_release_8=None):  # noqa: E501
        """EdiFabricCoreModelEdiX12GS - a model defined in Swagger"""  # noqa: E501

        self._code_identifying_information_type_1 = None
        self._sender_id_code_2 = None
        self._receiver_id_code_3 = None
        self._date_4 = None
        self._time_5 = None
        self._group_control_number_6 = None
        self._transaction_type_code_7 = None
        self._version_and_release_8 = None
        self.discriminator = None

        if code_identifying_information_type_1 is not None:
            self.code_identifying_information_type_1 = code_identifying_information_type_1
        if sender_id_code_2 is not None:
            self.sender_id_code_2 = sender_id_code_2
        if receiver_id_code_3 is not None:
            self.receiver_id_code_3 = receiver_id_code_3
        if date_4 is not None:
            self.date_4 = date_4
        if time_5 is not None:
            self.time_5 = time_5
        if group_control_number_6 is not None:
            self.group_control_number_6 = group_control_number_6
        if transaction_type_code_7 is not None:
            self.transaction_type_code_7 = transaction_type_code_7
        if version_and_release_8 is not None:
            self.version_and_release_8 = version_and_release_8

    @property
    def code_identifying_information_type_1(self):
        """Gets the code_identifying_information_type_1 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The code_identifying_information_type_1 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._code_identifying_information_type_1

    @code_identifying_information_type_1.setter
    def code_identifying_information_type_1(self, code_identifying_information_type_1):
        """Sets the code_identifying_information_type_1 of this EdiFabricCoreModelEdiX12GS.


        :param code_identifying_information_type_1: The code_identifying_information_type_1 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._code_identifying_information_type_1 = code_identifying_information_type_1

    @property
    def sender_id_code_2(self):
        """Gets the sender_id_code_2 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The sender_id_code_2 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._sender_id_code_2

    @sender_id_code_2.setter
    def sender_id_code_2(self, sender_id_code_2):
        """Sets the sender_id_code_2 of this EdiFabricCoreModelEdiX12GS.


        :param sender_id_code_2: The sender_id_code_2 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._sender_id_code_2 = sender_id_code_2

    @property
    def receiver_id_code_3(self):
        """Gets the receiver_id_code_3 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The receiver_id_code_3 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._receiver_id_code_3

    @receiver_id_code_3.setter
    def receiver_id_code_3(self, receiver_id_code_3):
        """Sets the receiver_id_code_3 of this EdiFabricCoreModelEdiX12GS.


        :param receiver_id_code_3: The receiver_id_code_3 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._receiver_id_code_3 = receiver_id_code_3

    @property
    def date_4(self):
        """Gets the date_4 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The date_4 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._date_4

    @date_4.setter
    def date_4(self, date_4):
        """Sets the date_4 of this EdiFabricCoreModelEdiX12GS.


        :param date_4: The date_4 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._date_4 = date_4

    @property
    def time_5(self):
        """Gets the time_5 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The time_5 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._time_5

    @time_5.setter
    def time_5(self, time_5):
        """Sets the time_5 of this EdiFabricCoreModelEdiX12GS.


        :param time_5: The time_5 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._time_5 = time_5

    @property
    def group_control_number_6(self):
        """Gets the group_control_number_6 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The group_control_number_6 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._group_control_number_6

    @group_control_number_6.setter
    def group_control_number_6(self, group_control_number_6):
        """Sets the group_control_number_6 of this EdiFabricCoreModelEdiX12GS.


        :param group_control_number_6: The group_control_number_6 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._group_control_number_6 = group_control_number_6

    @property
    def transaction_type_code_7(self):
        """Gets the transaction_type_code_7 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The transaction_type_code_7 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._transaction_type_code_7

    @transaction_type_code_7.setter
    def transaction_type_code_7(self, transaction_type_code_7):
        """Sets the transaction_type_code_7 of this EdiFabricCoreModelEdiX12GS.


        :param transaction_type_code_7: The transaction_type_code_7 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._transaction_type_code_7 = transaction_type_code_7

    @property
    def version_and_release_8(self):
        """Gets the version_and_release_8 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501


        :return: The version_and_release_8 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :rtype: str
        """
        return self._version_and_release_8

    @version_and_release_8.setter
    def version_and_release_8(self, version_and_release_8):
        """Sets the version_and_release_8 of this EdiFabricCoreModelEdiX12GS.


        :param version_and_release_8: The version_and_release_8 of this EdiFabricCoreModelEdiX12GS.  # noqa: E501
        :type: str
        """

        self._version_and_release_8 = version_and_release_8

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricCoreModelEdiX12GS, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricCoreModelEdiX12GS):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other